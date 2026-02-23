import type { Metadata } from 'next'
import './globals.css'
import { ThemeScript } from '@/components/ThemeScript'

export const metadata: Metadata = {
  title: 'Noah Bucheton — Développeur Web',
  description: 'Portfolio de Noah Bucheton, développeur web junior spécialisé dans le web frontend, disponible en alternance.',
  keywords: ['développeur web', 'React', 'Next.js', 'Node.js', 'alternance', 'portfolio'],
  authors: [{ name: 'Noah Bucheton' }],
  openGraph: {
    title: 'Noah Bucheton — Développeur Web',
    description: 'Portfolio de Noah Bucheton, développeur web junior spécialisé dans le web frontend.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Inject theme before render — no FOUC */}
        <ThemeScript />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
