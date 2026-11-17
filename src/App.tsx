import { Fragment, useEffect, useId, useState } from 'react';
import { experiences, identity, pathway, references, resume, skills, summary, timeline } from './content/portfolio';

const sections = [
  ['summary', 'Summary'], ['skills', 'Skills'], ['projects', 'Projects'],
  ['resume', 'Résumé'], ['pathway', 'Pathway'], ['references', 'References'],
] as const;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg className="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Cited({ text }: { text: string }) {
  const instance = useId();
  return <>{text.split(/(\[\d+\])/).map((part, i) => {
    const match = part.match(/^\[(\d+)\]$/);
    return match ? <sup key={i}><a id={`cite-${instance}-${i}`} data-citation={match[1]} href={`#ref-${match[1]}`} aria-label={`Reference ${match[1]}`}>{match[1]}</a></sup> : <Fragment key={i}>{part}</Fragment>;
  })}</>;
}

function Connection({ children }: { children: string }) {
  return <p className="connection"><span>NASA connection</span><Cited text={children} /></p>;
}

function EarthDiagram() {
  return <figure className="earth-diagram">
    <div className="diagram-top"><span>From observation to understanding</span><Arrow diagonal /></div>
    <svg viewBox="0 0 480 330" role="img" aria-labelledby="diagram-title diagram-desc">
      <title id="diagram-title">A conceptual remote sensing workflow</title>
      <desc id="diagram-desc">Geometric tiles represent image inputs. A connecting line leads to analysis and then decisions. This illustration contains no actual satellite data or model results.</desc>
      <defs><pattern id="tile-pattern" width="53" height="53" patternUnits="userSpaceOnUse"><rect x="2" y="2" width="49" height="49" rx="3" fill="#e3dfd7" /></pattern></defs>
      <g transform="translate(55 27)">
        <rect width="265" height="265" fill="url(#tile-pattern)" />
        <g fill="#ccc6b9"><rect x="55" y="2" width="49" height="49" rx="3"/><rect x="108" y="55" width="49" height="49" rx="3"/><rect x="161" y="108" width="49" height="49" rx="3"/><rect x="2" y="214" width="49" height="49" rx="3"/><rect x="214" y="55" width="49" height="49" rx="3"/></g>
        <g fill="#b4b9a6"><rect x="2" y="55" width="49" height="49" rx="3"/><rect x="55" y="108" width="49" height="49" rx="3"/><rect x="2" y="161" width="49" height="49" rx="3"/><rect x="108" y="214" width="49" height="49" rx="3"/></g>
        <g fill="#e4a07c"><rect x="161" y="55" width="49" height="49" rx="3"/><rect x="214" y="108" width="49" height="49" rx="3"/><rect x="161" y="161" width="49" height="49" rx="3"/></g>
        <rect x="158" y="52" width="55" height="55" rx="5" fill="none" stroke="#292720" strokeWidth="1.25"/>
      </g>
      <path d="M268 106h87q14 0 14 14v47" fill="none" stroke="#514d46" strokeWidth="1.25"/>
      <circle cx="369" cy="179" r="12" fill="#fdfcfc" stroke="#514d46"/>
      <path d="m365 179 3 3 5-6" fill="none" stroke="#514d46" strokeWidth="1.5"/>
      <text x="341" y="215" fill="#44403b" fontSize="13" fontFamily="Inter, sans-serif">Interpret</text>
      <path d="M369 228v41" stroke="#514d46" strokeWidth="1.25"/>
      <circle cx="369" cy="276" r="4" fill="#44403b"/>
    </svg>
    <div className="diagram-bottom"><span>Observe <span aria-hidden="true">/</span> Analyze <span aria-hidden="true">/</span> Understand</span><span>Conceptual illustration</span></div>
  </figure>;
}

function ProjectDiagram({ type }: { type: string }) {
  const labels = type === 'classification' ? ['Image data', 'Learn patterns', 'Classify'] : type === 'verification' ? ['Code changes', 'Assess risk', 'Review'] : ['A question', 'Find clarity', 'Understanding'];
  return <div className={`project-diagram ${type}`} role="img" aria-label={`Conceptual workflow: ${labels.join(', then ')}`}>
    {labels.map((label, i) => <Fragment key={label}><div className="flow-node"><span className={`flow-symbol symbol-${i}`} aria-hidden="true">{i === 0 ? <svg viewBox="0 0 60 60"><rect x="12" y="12" width="36" height="36" rx="4"/><path d="M12 24h36M12 36h36M24 12v36M36 12v36"/></svg> : i === 1 ? <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="18"/><path d="m20 30 7 7 14-14"/></svg> : <svg viewBox="0 0 60 60"><path d="M14 42V18h32v24zM22 26h16M22 33h10"/></svg>}</span><span>{label}</span></div>{i < 2 && <Arrow />}</Fragment>)}
    <span className="concept-label">Conceptual workflow</span>
  </div>;
}

export function ResumeSheet() {
  return <article className="resume-sheet" aria-label="Aaron Cao draft résumé">
    <div className="resume-heading"><h3>Aaron Cao</h3><span>Draft résumé · For content review</span></div>
    <p className="resume-role">Data science & machine learning · Satellite imagery & remote sensing</p>
    <div className="resume-group"><h4>Education</h4><strong>{resume.education}</strong><p>{resume.educationDetail}</p><p>Relevant coursework: {resume.coursework}</p></div>
    <div className="resume-group"><h4>Experience</h4>{resume.experience.map(item => <div className="resume-position" key={item.title}><div><strong>{item.title}</strong><span>{item.date}</span></div><ul>{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div>)}</div>
    <div className="resume-group"><h4>Project</h4><strong>EuroSAT Land Classifier</strong><p>{resume.project}</p></div>
    <div className="resume-group"><h4>Programs & certification</h4><p>{resume.programs}</p></div>
    <div className="resume-group"><h4>Technical skills</h4><p>{resume.skills}</p></div>
    <p className="resume-note">Career focus: NASA and aerospace data / ML roles. Contact information and internship outcomes pending review.</p>
  </article>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('summary');
  const resumeOnly = new URLSearchParams(window.location.search).get('view') === 'resume';

  useEffect(() => {
    if (resumeOnly) { document.title = 'Aaron Cao — NCAS Student Challenge — Draft Résumé'; return; }
    const update = () => {
      const visible = sections.filter(([id]) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 150);
      setActive(visible.at(-1)?.[0] ?? 'summary');
    };
    const escape = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMenuOpen(false); document.getElementById('menu-toggle')?.focus(); } };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('keydown', escape);
    update();
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('keydown', escape); };
  }, [resumeOnly]);

  if (resumeOnly) return <main className="resume-only"><div className="resume-only-actions"><a href="./" className="text-link">Back to portfolio</a><button className="button" onClick={() => window.print()}>Print résumé <Arrow /></button></div><ResumeSheet /></main>;

  return <>
    {/* DIRECTION: warm editorial portfolio; cream surfaces, light Inter, open evidence rows.
      FIRST VIEWPORT: name/navigation, spacious two-column introduction and conceptual image tiles.
      FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review,
      the verdict, DESIGN.md, and every shipping raster carrying its provenance. */}
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="header-inner">
      <a className="wordmark" href="#top" aria-label="Aaron Cao, back to top">aaron cao<span aria-hidden="true">.</span></a>
      <button id="menu-toggle" className="menu-toggle" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}<svg viewBox="0 0 24 24" aria-hidden="true"><path d={menuOpen ? 'm6 6 12 12M6 18 18 6' : 'M4 8h16M4 16h16'} stroke="currentColor" strokeWidth="1.5"/></svg></button>
      <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Portfolio sections">{sections.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <button className="button button-small header-print" onClick={() => window.print()}>Save portfolio <Arrow diagonal /></button>
    </div></header>

    <main id="main">
      <section id="top" className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy"><h1 id="hero-title">A clearer picture.<br/><span>A more reliable<br className="desktop-break"/> future.</span></h1><p className="hero-description">I’m Aaron. I’m exploring how data science and machine learning can turn satellite imagery into understanding—and useful, dependable systems.</p><div className="hero-actions"><a className="button" href="#projects">Explore my work <Arrow /></a><a className="text-link" href="#resume">View résumé <Arrow diagonal /></a></div><div className="hero-context"><span className="program-badge"><span className="status-dot" aria-hidden="true"/>{identity.program}</span><span>Satellite imagery & remote sensing</span></div></div>
        <EarthDiagram />
        <div className="hero-foot"><span>{identity.colleges}</span><span>Career portfolio · Content draft</span></div>
      </section>

      <section id="summary" className="section container summary-section" aria-labelledby="summary-title"><div className="section-heading"><h2 id="summary-title">A direction,<br/>grounded in curiosity.</h2><p>Executive summary</p></div><div className="section-body"><p className="summary-text" data-content="summary"><Cited text={summary}/></p><Connection>Science Mission Directorate, Earth observation, and the Data, IT, and Cyber career area.[1][2][3]</Connection></div></section>

      <section id="skills" className="section container" aria-labelledby="skills-title"><div className="section-intro"><h2 id="skills-title">Technical skills,<br/>with a purpose.</h2><p>From mathematical foundations to deployed models.<br/>The tools matter most when they connect to a real problem.</p></div><div className="skills-list">{skills.map(skill => <article className="skill-row" key={skill.name}><h3>{skill.name}</h3><p>{skill.evidence}</p><p><Cited text={skill.relevance}/></p></article>)}</div><Connection>Coursework and applied practice connect these skills to data, research, and aerospace software pathways.[3]</Connection></section>

      <section id="projects" className="section projects-section container" aria-labelledby="projects-title"><div className="section-intro"><h2 id="projects-title">Experiences & projects.</h2><p>Three ways I’m putting learning into practice:<br/>understanding data, building trust, and sharing knowledge.</p></div>{experiences.map(project => <article id={project.id} className="project" key={project.id}><div className="project-art"><ProjectDiagram type={project.visual}/><div className="project-art-caption"><span>{project.field}</span><span className="project-tags">{project.tags.join(' · ')}</span></div></div><div className="project-body"><h3>{project.title}</h3><p className="project-role">{project.role}</p><h4>What I worked on</h4><p data-description={project.id}><Cited text={project.description.join(' ')}/></p><h4>Why it connects</h4><p data-alignment={project.id}><Cited text={project.alignment.join(' ')}/></p></div></article>)}<Connection>Each experience connects applied skills to Earth observation, software reliability, or collaborative technical work.[2][3]</Connection></section>

      <section id="resume" className="section resume-section container" aria-labelledby="resume-title"><div className="section-heading"><h2 id="resume-title">The essentials,<br/>on one page.</h2><p>Résumé</p><p className="section-aside">A concise view of my preparation, experience, and technical foundations.</p><a className="button" href={`${import.meta.env.BASE_URL}AaronCao_NCAS_Student_Challenge_Resume.pdf`} download>Download draft résumé <Arrow diagonal /></a><a className="text-link resume-print-link" href="?view=resume">Open printable résumé <Arrow /></a></div><div><ResumeSheet/><Connection>A draft résumé focused on NASA and aerospace data / ML opportunities.[3]</Connection></div></section>

      <section id="pathway" className="section container" aria-labelledby="pathway-title"><div className="section-intro"><h2 id="pathway-title">Connecting the dots.</h2><p>NASA career pathway alignment<br/>What I’m learning. What it enables. Where I want to go.</p></div><div className="pathway-diagram" aria-label="Coursework leads to skills, which connect to NASA and aerospace pathways"><div><span>Coursework</span><p>Build the foundation.</p></div><Arrow/><div><span>Applied skills</span><p>Put ideas to work.</p></div><Arrow/><div><span>NASA & aerospace</span><p>Find a meaningful direction.</p></div></div><div className="table-wrap"><table><caption className="sr-only">Connections between coursework, applied skills, and NASA or aerospace pathways</caption><thead><tr><th scope="col">Coursework / experience</th><th scope="col">Skills built</th><th scope="col">Career connection</th></tr></thead><tbody>{pathway.map(([course, skill, career, refs]) => <tr key={course}><th scope="row">{course}</th><td>{skill}</td><td><Cited text={`${career}${refs.map(n => `[${n}]`).join('')}`}/></td></tr>)}</tbody></table></div><div className="timeline">{timeline.map(item => <article key={item.when}><span className="timeline-date">{item.when}</span><h3>{item.title}</h3><p><Cited text={item.text}/></p></article>)}</div><Connection>My primary interest is Earth observation and remote sensing, supported by reliable data and software systems.[1][2][3]</Connection></section>

      <section id="references" className="section references-section container" aria-labelledby="references-title"><div className="section-heading"><h2 id="references-title">Built on<br/>good sources.</h2><p>References</p><p className="section-aside">Resources informing this career direction. Citation numbers throughout link here.</p></div><ol className="references-list">{references.map(ref => <li id={`ref-${ref.id}`} key={ref.id} tabIndex={-1}><div><a className="reference-title" href={ref.url}>{ref.title}<Arrow diagonal /></a><span>{ref.org}</span><a className="reference-url" href={ref.url}>{ref.url}</a></div><button className="citation-return" aria-label={`Return to first citation of reference ${ref.id}`} onClick={() => { const target = document.querySelector<HTMLAnchorElement>(`[data-citation="${ref.id}"]`); target?.focus(); target?.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }}>Back to citation <Arrow /></button></li>)}</ol><Connection>These resources support the career connections throughout this portfolio; source details remain subject to final content review.</Connection></section>
    </main>
    <footer className="site-footer container"><div><a className="wordmark" href="#top">aaron cao<span aria-hidden="true">.</span></a><p>Curiosity, with a direction.</p><button className="button footer-print" onClick={() => window.print()}>Print / save PDF <Arrow diagonal /></button></div><div><p>NCAS career portfolio · 2026–27</p><p>Draft content for review. Personal portfolio; no NASA endorsement.</p><a className="text-link" href="#top">Back to top <Arrow diagonal /></a></div></footer>
  </>;
}
