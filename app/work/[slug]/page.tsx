import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BackLink, ImagePlaceholder, SiteHeader } from '@/components/portfolio-shell'
import { getNextProject, getProject, projects } from '@/lib/portfolio-data'

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })) }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  const next = getNextProject(project.slug)
  const isLast = project.slug === projects[projects.length - 1].slug
  return <main className="detail-page"><SiteHeader /><div className="detail-shell"><BackLink href="/#work">Back to work</BackLink><header className="detail-hero"><p className="eyebrow">{project.number} · {project.category} · {project.year}</p><h1>{project.title}</h1>{project.description && <p>{project.description}</p>}</header>{project.heroImage && <ImagePlaceholder src={project.heroImage} alt={`${project.title} hero`} label="Hero image" className="detail-feature" />}<div className="project-info">{project.info.role && <div><span>Role</span><strong>{project.info.role}</strong></div>}{project.info.services && <div><span>Services</span><strong>{project.info.services}</strong></div>}<div><span>Year</span><strong>{project.info.year}</strong></div></div><CaseStudy project={project} />{isLast ? <Link className="next-project" href="/#work"><span className="eyebrow">Back to work</span><strong>All projects <ArrowRight aria-hidden="true" /></strong></Link> : <Link className="next-project" href={`/work/${next.slug}`}><span className="eyebrow">Next project</span><strong>{next.title} <ArrowRight aria-hidden="true" /></strong></Link>}</div></main>
}

function CaseStudy({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  const sections = [['The challenge', project.challenge, project.images[0], 'Challenge image'], ['The approach', project.approach, project.images[1], 'Approach image'], ['The result', project.result, project.images[2], 'Result image']] as const
  return <div className="case-study">{sections.map(([title, copy, image, label]) => copy || image ? <section key={title}>{copy && <div className="case-copy"><p className="eyebrow">{title}</p><p>{copy}</p></div>}{image && <ImagePlaceholder src={image} alt={`${project.title} ${label}`} label={label} />}</section> : null)}</div>
}
