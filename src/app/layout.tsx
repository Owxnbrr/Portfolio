import type { Metadata } from 'next'
import './globals.css'
import { ThemeScript } from '@/components/ThemeScript'

export const metadata: Metadata = {
  metadataBase: new URL('https://noahbucheton.fr'),
  title: {
    default: 'Noah Bucheton — Développeur Web',
    template: '%s | Noah Bucheton',
  },
  description:
    'Portfolio de Noah Bucheton, développeur web junior spécialisé frontend (React, Next.js). Disponible en alternance : sites vitrines, e-commerce et interfaces modernes.',
  keywords: [
    'Noah Bucheton',
    'développeur web',
    'développeur frontend',
    'React',
    'Next.js',
    'Node.js',
    'portfolio développeur',
    'alternance développeur web',
    'Amiens',
  ],
  authors: [{ name: 'Noah Bucheton', url: 'https://noahbucheton.fr' }],
  creator: 'Noah Bucheton',
  publisher: 'Noah Bucheton',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://noahbucheton.fr',
    siteName: 'Portfolio Noah Bucheton',
    title: 'Noah Bucheton — Développeur Web',
    description:
      'Portfolio de Noah Bucheton, développeur web junior spécialisé frontend (React, Next.js).',
    // Ajoute une vraie image OG plus tard (1200x630)
    // images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noah Bucheton — Développeur Web',
    description:
      'Portfolio de Noah Bucheton, développeur web junior spécialisé frontend (React, Next.js).',
    // images: ['/og-image.jpg'],
  },
   icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  )
}