import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

if (!existsSync('dist/index.html')) throw new Error('Run npm run build before exporting PDFs.');
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4174', '--strictPort'], { stdio: 'pipe', windowsHide: true });
let serverError = '';
server.stderr.on('data', chunk => { serverError += chunk; });
let browser;
try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) throw new Error(`Export server failed: ${serverError}`);
    try { const response = await fetch('http://127.0.0.1:4174'); if (response.ok) { ready = true; break; } } catch { /* Wait for local server. */ }
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  if (!ready) throw new Error('Export server did not become ready. Check port 4174.');
  browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await mkdir('output', { recursive: true });
  const jobs = [
    { url: '/?view=resume', file: 'AaronCao_NCAS_Student_Challenge_Resume.pdf' },
    { url: '/', file: 'AaronCao_NCAS_Student_Challenge_Portfolio.pdf' },
  ];
  for (const job of jobs) {
    await page.goto(`http://127.0.0.1:4174${job.url}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: resolve('output', job.file), format: 'A4', preferCSSPageSize: true, printBackground: true, tagged: true, outline: true });
    await copyFile(resolve('output', job.file), resolve('public', job.file));
    await copyFile(resolve('output', job.file), resolve('dist', job.file));
    console.log(`Exported output/${job.file}`);
  }
  await page.goto('http://127.0.0.1:4174/', { waitUntil: 'networkidle' });
  const visibleContent = await page.evaluate(() => [...document.querySelectorAll('main h1, main h2, main h3, main h4, main p, .diagram-top>span, .diagram-bottom>span, .flow-node>span:last-child, .concept-label, .hero-context, .hero-foot, .project-art-caption, .resume-heading>span, .resume-group strong, .resume-position li, .resume-position>div>span, .pathway-diagram>div>span, table th, table td, .timeline-date, .references-list li>div')].map(element => element.textContent.trim()).filter(Boolean));
  await writeFile('output/website-content.json', JSON.stringify(visibleContent, null, 2));
  const report = await page.evaluate(() => ({
    summaryWords: document.querySelector('[data-content="summary"]').textContent.trim().split(/\s+/).length,
    skills: document.querySelectorAll('.skill-row').length,
    experiences: document.querySelectorAll('.project').length,
    references: document.querySelectorAll('.references-list li').length,
    missingCitationTargets: [...document.querySelectorAll('sup a')].filter(a => !document.getElementById(a.hash.slice(1))).map(a => a.hash),
  }));
  await writeFile('output/content-checks.json', JSON.stringify(report, null, 2));
  if (report.summaryWords > 250 || report.skills < 3 || report.skills > 10 || report.experiences > 3 || report.missingCitationTargets.length) throw new Error('Content limits failed; see output/content-checks.json.');
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser?.close();
  server.kill();
}
