'use client'

import { useState } from 'react'
import { PROJECTS, type Project } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'

type Filter = 'all' | 'design' | 'fullstack' 

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all',       label: 'Tous' },
  { value: 'fullstack', label: 'Fullstack' },
  { value: 'design',  label: 'Design' },
]

const STATUS_LABELS: Record<Project['status'], string> = {
  'terminé': 'TERMINÉ',
  'en cours': 'EN COURS',
  'oss': 'OSS',
  'prototype': 'PROTOTYPE'
}

const STATUS_COLORS: Record<Project['status'], string> = {
  'terminé':  'text-[var(--color-success)] border-[var(--color-success)]/30 bg-[var(--color-success)]/8',
  'en cours': 'text-[var(--color-accent)] border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8',
  'oss':      'text-yellow-400 border-yellow-400/30 bg-yellow-400/8',
  'prototype': 'text-blue-400 border-blue-400/30 bg-blue-400/8',
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.type === filter)

  return (
    <section id="projects" className="py-24">
      <div className="container-main">
        <SectionHeader
          id="02"
          label="projets"
          title="Ce que j'ai construit"
          subtitle={`${PROJECTS.length} projets — code lisible, architecture réfléchie.`}
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mt-8 mb-10" role="tablist" aria-label="Filtrer les projets">
          {FILTERS.map(f => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              onClick={() => setFilter(f.value)}
              className={`
                font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-sm
                border transition-all duration-150
                ${filter === f.value
                  ? 'text-[var(--color-accent)] border-[var(--color-accent)]/50 bg-[var(--color-accent)]/8'
                  : 'text-[var(--color-muted)] border-[var(--color-border)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]/20'
                }
              `}
            >
              {filter === f.value && <span aria-hidden="true">▸ </span>}
              {f.label}
            </button>
          ))}
          <span className="ml-auto label-mono self-center">
            // {filtered.length} résultat{filtered.length > 1 ? 's' : ''}
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="card flex flex-col overflow-hidden group"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-44 overflow-hidden"
        style={{ background: project.gradient }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/60 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`
            font-mono text-[10px] tracking-widest uppercase
            px-2 py-1 rounded-sm border
            ${STATUS_COLORS[project.status]}
          `}>
            {STATUS_LABELS[project.status]}
          </span>
        </div>

        {/* Year */}
        <div className="absolute bottom-3 left-4">
          <span className="label-mono">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-xl text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-150">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {project.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[var(--color-border)]">
          {/* Links */}
          <div className="flex gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-150"
                aria-label={`Code GitHub — ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-150"
                aria-label={`Demo live — ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}
          </div>

          {/* CTA + Hash */}
          <div className="flex items-center gap-4">
            <span className="project-hash">#{project.hash}</span>
            <a
              href={`/projects/${project.id}`}
              className="
                flex items-center gap-1
                font-mono text-xs text-[var(--color-accent)]
                hover:gap-2 transition-all duration-150
              "
            >
              Étude de cas
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
