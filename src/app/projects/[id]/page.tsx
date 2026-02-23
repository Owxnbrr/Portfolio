import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PROJECTS, PROFILE } from '@/data/portfolio'
import { ProjectPageClient } from './ProjectPageClient'

// ── Génère les routes statiques au build ──────────────
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }))
}

// ── Métadonnées dynamiques par projet ─────────────────
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.id === params.id)
  if (!project) return {}

  return {
    title: `${project.title} — ${PROFILE.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Étude de cas`,
      description: project.description,
      type: 'article',
    },
  }
}

// ── Page (Server Component) ───────────────────────────
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = PROJECTS.find((p) => p.id === params.id)

  // 404 si le projet n'existe pas
  if (!project) notFound()

  // Projets adjacents pour la navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === params.id)
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null

  return (
    <ProjectPageClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  )
}
