import { BackLink, ImagePlaceholder, SiteHeader } from '@/components/portfolio-shell'
import { interests } from '@/lib/portfolio-data'

export default function InterestsPage() {
  return <main className="interests-page"><SiteHeader /><div className="interests-shell"><BackLink /><header className="interests-hero"><h1>Beyond the work.</h1><p>A few things I enjoy when I&apos;m not designing.</p></header><div className="interest-list">{interests.map((interest, index) => <article className={`interest-item interest-${index + 1}`} key={interest.number}><p className="eyebrow">Interest {interest.number}</p><ImagePlaceholder src={interest.image} alt={interest.title || `Interest ${interest.number}`} label={`Interest ${interest.number}`} />{interest.title && <h2>{interest.title}</h2>}{interest.description && <p>{interest.description}</p>}</article>)}</div></div></main>
}
