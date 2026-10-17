import Link from 'next/link'
import { ArrowUp, MoveUpRight } from 'lucide-react'
import { ButtonLink, ImagePlaceholder, SiteHeader } from '@/components/portfolio-shell'
import { about, projects, siteConfig } from '@/lib/portfolio-data'

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section id="intro" className="hero">
        <p className="eyebrow">{siteConfig.role}</p>
        <h1>I TURN IDEAS<br />INTO <em>EXPERIENCES.</em></h1>
        <p className="hero-copy">Designing clear, thoughtful digital experiences<br className="hidden sm:block" /> with a strong point of view.</p>
        <Link href="#work" className="scroll-cue">Scroll to explore <span aria-hidden="true">↓</span></Link>
      </section>

      <section id="work" className="work-section section-shell">
        <div className="section-heading">
          <h2>So, what does<br /><em>that look like?</em></h2>
          <p className="eyebrow">Selected work</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <Link href={project.link} className="project-item reveal" key={project.id}>
              <p className="project-number">{project.number}</p>
              <ImagePlaceholder src={project.image || project.thumbnail || project.heroImage} alt={`${project.title} project thumbnail`} label={project.category} />
              <div className="project-card-content">
                <div className="project-caption"><h3>{project.title}</h3><span>{project.category} · {project.year}</span><MoveUpRight aria-hidden="true" /></div>
                {project.description && <p className="project-description">{project.description}</p>}
                <ul className="project-tags" aria-label={`${project.title} skills`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="about-section section-shell">
        <div className="section-heading">
          <h2>Behind the pixels,<br /><em>there&apos;s me.</em></h2>
        </div>
        <div className="about-grid">
          <ImagePlaceholder src={about.portrait} alt="Portrait of Jewel Mabunga" label="Portrait" className="portrait" />
          <div className="about-copy">{about.shortBio && <p>{about.shortBio}</p>}<Link href="/interests" className="text-link">Wanna know more about me? <strong>Click here →</strong></Link></div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <h2>What should<br />we <em>make next?</em></h2>
          <p>Open to interesting problems, thoughtful teams, and ambitious ideas.</p>
          <div className="contact-actions">{siteConfig.email && <ButtonLink href={`mailto:${siteConfig.email}`}>Get in touch</ButtonLink>}<ButtonLink href={siteConfig.resume} variant="outline" download>Download resume</ButtonLink></div>
        </div>
        <footer className="footer"><div><strong>{siteConfig.name}</strong><span>{siteConfig.role}</span></div><span>© 2026 {siteConfig.name}</span><Link href="#intro">Back to top <ArrowUp aria-hidden="true" /></Link></footer>
      </section>
    </main>
  )
}
