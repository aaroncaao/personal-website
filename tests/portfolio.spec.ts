import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { experiences, summary } from '../src/content/portfolio';
import { mkdir } from 'node:fs/promises';

test('content limits and evidence blocks', async ({ page }) => {
  expect(summary.replace(/\[\d+\]/g, '').trim().split(/\s+/).length).toBeLessThanOrEqual(250);
  for (const experience of experiences) {
    expect(experience.description.length).toBeLessThanOrEqual(4);
    expect(experience.alignment.length).toBeLessThanOrEqual(4);
    for (const block of [...experience.description, ...experience.alignment]) {
      const normalized = block.replace(/\[\d+\]/g, '').replace(/\bU\.S\./g, 'US');
      expect(normalized.split(/[.!?](?:\s|$)/).filter(s => s.trim()).length).toBe(1);
    }
  }
  await page.goto('/');
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('.skill-row')).toHaveCount(8);
  await expect(page.locator('.project')).toHaveCount(3);
  await expect(page.locator('.references-list li')).toHaveCount(9);
  const missing = await page.locator('a[href^="#"]').evaluateAll(links => links.filter(link => !document.getElementById((link as HTMLAnchorElement).hash.slice(1))).map(link => link.getAttribute('href')));
  expect(missing).toEqual([]);
  for (let n = 1; n <= 9; n++) await expect(page.locator(`[data-citation="${n}"]`).first()).toBeAttached();
});

test('desktop and mobile layout, accessibility and screenshots', async ({ page }) => {
  await mkdir('.impeccable/review', { recursive: true });
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const [name, width, height] of [['desktop', 1440, 1000], ['tablet', 768, 1024], ['mobile', 390, 844], ['mobile-360', 360, 800]] as const) {
    await page.setViewportSize({ width, height });
    await page.goto('/');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(results.violations.map(v => `${v.id}: ${v.nodes.map(n => n.target).join(', ')}`)).toEqual([]);
    await page.screenshot({ path: `.impeccable/review/${name}.png`, fullPage: true });
    if (name === 'desktop') await page.screenshot({ path: '.impeccable/review/hero-repro.png' });
    if (name === 'mobile') await page.screenshot({ path: '.impeccable/review/mobile-hero.png' });
  }
  expect(errors).toEqual([]);
});

test('mobile navigation, escape, citation round trip and keyboard entry', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  const menu = page.locator('#menu-toggle');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation').getByRole('link', { name: 'Projects', exact: true }).click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false');
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Menu' })).toBeFocused();
  await page.locator('[data-citation="2"]').first().click();
  await expect(page).toHaveURL(/#ref-2$/);
  await page.getByRole('button', { name: 'Return to first citation of reference 2' }).click();
  await expect(page.locator('[data-citation="2"]').first()).toBeFocused();
  await page.evaluate(() => { window.print = () => { document.body.dataset.printCalled = 'true'; }; });
  await page.getByRole('button', { name: 'Print / save PDF' }).click();
  await expect(page.locator('body')).toHaveAttribute('data-print-called', 'true');
});

test('résumé, download and print control work', async ({ page, request }) => {
  await page.goto('/');
  const response = await request.get('/AaronCao_NCAS_Student_Challenge_Resume.pdf');
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('application/pdf');
  await page.getByRole('link', { name: 'Open printable résumé' }).click();
  await expect(page).toHaveURL(/view=resume/);
  await expect(page.getByRole('article', { name: 'Aaron Cao draft résumé' })).toBeVisible();
  await page.evaluate(() => { window.print = () => { document.body.dataset.printCalled = 'true'; }; });
  await page.getByRole('button', { name: 'Print résumé' }).click();
  await expect(page.locator('body')).toHaveAttribute('data-print-called', 'true');
  await page.getByRole('link', { name: 'Back to portfolio' }).click();
  await expect(page.locator('h1')).toBeVisible();
});
