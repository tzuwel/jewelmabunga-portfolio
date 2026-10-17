import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { FloatingNav } from '@/components/portfolio-shell'

export const metadata: Metadata = {
  title: 'Jewel Mabunga — Web & Product Designer',
  description: 'Jewel Mabunga is a web and product designer creating clear, thoughtful digital experiences.',
  openGraph: {
    title: 'Jewel Mabunga — Web & Product Designer',
    description: 'Clear, thoughtful digital experiences with a strong point of view.',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F5F3EE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <FloatingNav />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
