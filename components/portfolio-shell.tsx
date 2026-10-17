'use client'

import Link from 'next/link'
import { ArrowDown, ArrowUp, Grid2X2, House, MoveUpRight, Target, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/portfolio-data'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark">{siteConfig.name}</Link>
      <span className="header-meta">Portfolio — 2026</span>
    </header>
  )
}

const navItems = [
  { href: '/', label: 'Home', icon: House },
  { href: '/#intro', label: 'Intro', icon: Target },
  { href: '/#work', label: 'Work', icon: Grid2X2 },
  { href: '/#about', label: 'About', icon: UserRound },
  { href: '/#contact', label: 'Contact', icon: MoveUpRight },
]

export function FloatingNav() {
  const pathname = usePathname()
  const [active, setActive] = useState(pathname === '/' ? 'intro' : 'home')

  useEffect(() => {
    if (pathname !== '/') {
      setActive('home')
      return
    }

    const sections = navItems.slice(1)
      .map((item) => document.querySelector(item.href.replace('/#', '#')))
      .filter(Boolean) as Element[]

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <nav className="floating-nav" aria-label="Section navigation">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link key={label} href={href} aria-label={label} className={active === label.toLowerCase() ? 'is-active' : ''} onClick={(event) => {
          if (href.startsWith('/#') && pathname === '/') {
            event.preventDefault()
            document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setActive(label.toLowerCase())
            window.history.replaceState(null, '', href)
          }
        }}>
          <Icon aria-hidden="true" strokeWidth={1.25} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  )
}

export function BackLink({ href = '/', children = 'Back to portfolio' }: { href?: string; children?: React.ReactNode }) {
  return <Link href={href} className="back-link"><ArrowUp aria-hidden="true" /> {children}</Link>
}

export function ImagePlaceholder({ src, alt = '', label, className = '' }: { src?: string; alt?: string; label: string; className?: string }) {
  return (
    <div className={`image-frame reveal-image ${!src ? 'is-empty' : ''} ${className}`}>
      {src ? <img src={src} alt={alt} loading="lazy" /> : <span className="placeholder-note">Replace with image</span>}
      <span>{label}</span>
    </div>
  )
}

export function ButtonLink({ href, children, variant = 'light', download = false }: { href: string; children: React.ReactNode; variant?: 'light' | 'outline'; download?: boolean }) {
  return <Link href={href} className={`button-link ${variant}`} download={download}>{children} {variant === 'light' ? <MoveUpRight aria-hidden="true" /> : <ArrowDown aria-hidden="true" />}</Link>
}
