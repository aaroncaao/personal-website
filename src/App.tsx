import { Fragment, useEffect, useId, useState } from 'react';
import { experiences, identity, pathway, portrait, references, skills, summary, timeline, type PortfolioImage } from './content/portfolio';
import { resume, resumeSections } from './content/resume';

const sections = [
  ['summary', 'Summary'], ['skills', 'Skills'], ['projects', 'Projects'],
  ['resume', 'Résumé'], ['pathway', 'Pathway'], ['references', 'References'],
] as const;
const resumePdf = `${import.meta.env.BASE_URL}NCAS_RESUME.pdf`;
const resumeDownloadName = 'AaronCao_NCAS_Student_Challenge_Resume.pdf';

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

function ImageFrame({ image, portrait = false }: { image: PortfolioImage; portrait?: boolean }) {
  return <div className={portrait ? 'image-frame hero-portrait' : 'image-frame'}>
    <img
      src={`${import.meta.env.BASE_URL}images/${image.file}`}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={portrait ? 'eager' : 'lazy'}
    />
  </div>;
}

function ResumeViewer() {
  return <iframe className="resume-viewer" title="Aaron Cao résumé PDF" src={`${resumePdf}#view=FitH`} loading="lazy" />;
}

function ResumeSheet() {
  return <article className="resume-sheet" aria-label={`${resume.name} résumé`}>
    <div className="resume-heading"><h3>{resume.name}</h3></div>
    <p className="resume-contact">
      <span>{resume.location}</span>
      <a href={`tel:${resume.phone.replace(/\D/g, '')}`}>{resume.phone}</a>
      <a href={`mailto:${resume.email}`}>{resume.email}</a>
      {resume.profiles.map(profile => <a key={profile.label} href={profile.url}>{profile.label}</a>)}
    </p>
    {resumeSections.map(section => <div className="resume-group" key={section.title}>
      <h4>{section.title}</h4>
      {section.entries.map(entry => <div className="resume-position" key={entry.title ?? section.title}>
        {entry.title && <div><strong>{entry.title}</strong><span>{entry.date}</span></div>}
        {entry.role && <p>{entry.role}</p>}
        <ul>{entry.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
      </div>)}
    </div>)}
  </article>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('summary');
  const resumeOnly = new URLSearchParams(window.location.search).get('view') === 'resume';

  useEffect(() => {
    if (resumeOnly) { document.title = 'Aaron Cao — NCAS Student Challenge — Résumé'; return; }
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

  if (resumeOnly) return <main className="resume-only"><div className="resume-only-actions"><a href="./" className="text-link">Back to portfolio</a><button className="button" onClick={() => window.print()}>Print résumé <Arrow /></button></div><ResumeViewer /><ResumeSheet /></main>;

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="header-inner">
      <a className="wordmark" href="#top" aria-label="Aaron Cao, back to top">aaron cao<span aria-hidden="true">.</span></a>
      <button id="menu-toggle" className="menu-toggle" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}<svg viewBox="0 0 24 24" aria-hidden="true"><path d={menuOpen ? 'm6 6 12 12M6 18 18 6' : 'M4 8h16M4 16h16'} stroke="currentColor" strokeWidth="1.5"/></svg></button>
      <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Portfolio sections">{sections.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <button className="button button-small header-print" onClick={() => window.print()}>Save portfolio <Arrow diagonal /></button>
    </div></header>

    <main id="main">
      <section id="top" className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy"><h1 id="hero-title">Aaron Cao's<br/><span>Career Portfolio<br className="desktop-break"/></span></h1><p className="hero-description">{identity.role} focused on satellite imagery and remote sensing.</p><div className="hero-actions"><a className="button" href="#projects">View projects <Arrow /></a><a className="text-link" href="#resume">View résumé <Arrow diagonal /></a></div><div className="hero-context"><span className="program-badge"><span className="status-dot" aria-hidden="true"/>{identity.program}</span></div></div>
        <ImageFrame image={portrait} portrait />
        <div className="hero-foot"><span>{identity.colleges}</span><span>Career portfolio · Content draft</span></div>
      </section>

      <section id="summary" className="section container summary-section" aria-labelledby="summary-title">
        <h2 id="summary-title">Executive Summary</h2>
        <div className="section-body">
          <p className="summary-text" data-content="summary"><Cited text={summary}/></p>
          <Connection>Science Mission Directorate, Earth observation, and the Data, IT, and Cyber career area.[1][2][3]</Connection>
        </div>
      </section>

      <section id="skills" className="section container" aria-labelledby="skills-title"><h2 id="skills-title" className="section-intro">Technical Skills</h2><div className="skills-list">{skills.map(skill => <article className="skill-row" key={skill.name}><h3>{skill.name}</h3><p>{skill.evidence}</p><p><Cited text={skill.relevance}/></p></article>)}</div></section>

      <section id="projects" className="section projects-section container" aria-labelledby="projects-title">
        <h2 id="projects-title" className="section-intro">Experiences & Projects</h2>
        {experiences.map(project => <article id={project.id} className="project" key={project.id}>
          <figure className="project-art">
            <ImageFrame image={project.image} />
            <figcaption className="project-art-caption">
              <span>{project.field}</span>
              <span className="project-tags">{project.tags.join(' · ')}</span>
            </figcaption>
          </figure>
          <div className="project-body">
            <h3>{project.title}</h3>
            <p className="project-role">{project.role}</p>
            <h4>Applied skills</h4>
            <p data-description={project.id}><Cited text={project.description.join(' ')}/></p>
            <h4>NASA and aerospace relevance</h4>
            <p data-alignment={project.id}><Cited text={project.alignment.join(' ')}/></p>
          </div>
        </article>)}
      </section>

      <section id="resume" className="section resume-section container" aria-labelledby="resume-title">
        <div className="section-heading">
          <h2 id="resume-title">Résumé</h2>
          <a className="button" href={resumePdf} download={resumeDownloadName}>Download résumé <Arrow diagonal /></a>
          <a className="text-link resume-print-link" href={resumePdf}>Open résumé PDF <Arrow /></a>
        </div>
        <ResumeViewer />
        <ResumeSheet />
      </section>

      <section id="pathway" className="section container" aria-labelledby="pathway-title"><h2 id="pathway-title" className="section-intro">NASA Career Pathway</h2><div className="pathway-diagram" aria-label="Coursework leads to skills, which connect to NASA and aerospace pathways"><div><span>Coursework</span></div><Arrow/><div><span>Applied skills</span></div><Arrow/><div><span>NASA & aerospace</span></div></div><div className="table-wrap"><table><caption className="sr-only">Connections between coursework, applied skills, and NASA or aerospace pathways</caption><thead><tr><th scope="col">Coursework / experience</th><th scope="col">Skills built</th><th scope="col">Career connection</th></tr></thead><tbody>{pathway.map(([course, skill, career, refs]) => <tr key={course}><th scope="row">{course}</th><td>{skill}</td><td><Cited text={`${career}${refs.map(n => `[${n}]`).join('')}`}/></td></tr>)}</tbody></table></div><div className="timeline">{timeline.map(item => <article key={item.when}><span className="timeline-date">{item.when}</span><h3>{item.title}</h3><p><Cited text={item.text}/></p></article>)}</div></section>

      <section id="references" className="section references-section container" aria-labelledby="references-title"><h2 id="references-title">References</h2><ol className="references-list">{references.map(ref => <li id={`ref-${ref.id}`} key={ref.id} tabIndex={-1}><div><a className="reference-title" href={ref.url}>{ref.title}<Arrow diagonal /></a><span>{ref.org}</span><a className="reference-url" href={ref.url}>{ref.url}</a></div><button className="citation-return" aria-label={`Return to first citation of reference ${ref.id}`} onClick={() => { const target = document.querySelector<HTMLAnchorElement>(`[data-citation="${ref.id}"]`); target?.focus(); target?.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }}>Back to citation <Arrow /></button></li>)}</ol></section>
    </main>
    <footer className="site-footer container"><div><a className="wordmark" href="#top">aaron cao<span aria-hidden="true">.</span></a><button className="button footer-print" onClick={() => window.print()}>Print / save PDF <Arrow diagonal /></button></div><div><p>NCAS career portfolio · 2026–27</p><p>Draft content for review. Personal portfolio; no NASA endorsement.</p><a className="text-link" href="#top">Back to top <Arrow diagonal /></a></div></footer>
  </>;
}
