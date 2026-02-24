'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { Project } from '@/data/portfolio'
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { on } from 'process'

interface Props {
  project: Project
  prevProject: Project | null
  nextProject: Project | null
}

{/* ── Couleurs des nodes d'architecture ───────────────── */}
const NODE_COLORS = {
  client:  { bg: 'bg-[var(--color-accent)]/10',   border: 'border-[var(--color-accent)]/30',   text: 'text-[var(--color-accent)]'   },
  server:  { bg: 'bg-emerald-500/10',              border: 'border-emerald-500/30',             text: 'text-emerald-400'             },
  db:      { bg: 'bg-violet-500/10',               border: 'border-violet-500/30',              text: 'text-violet-400'              },
  service: { bg: 'bg-amber-500/10',                border: 'border-amber-500/30',               text: 'text-amber-400'               },
  infra:   { bg: 'bg-[var(--color-muted)]/10',     border: 'border-[var(--color-muted)]/30',    text: 'text-[var(--color-muted)]'    },
}

{/* ── Status labels ──────────────────────────────────────*/}
const STATUS_LABELS = { 'terminé': 'TERMINÉ', 'en cours': 'EN COURS', 'oss': 'OSS', 'prototype': 'PROTOTYPE' }
const STATUS_COLORS = {
  'terminé':  'text-[var(--color-success)] border-[var(--color-success)]/30 bg-[var(--color-success)]/8',
  'en cours': 'text-[var(--color-accent)] border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8',
  'oss':      'text-amber-400 border-amber-400/30 bg-amber-400/8',
  'prototype': 'text-purple-400 border-purple-400/30 bg-purple-400/8',
}

export function ProjectPageClient({ project, prevProject, nextProject }: Props) {
  const cs = project.caseStudy

  return (
    <>
      <ScrollProgress />
      <Header />

      <main className="relative z-10 pt-14">

        {/* ── HERO PROJET ──────────────────────────────── */}
        <section
          className="relative py-20 border-b border-[var(--color-border)] overflow-hidden"
          aria-label={`Projet ${project.title}`}
        >
          {/* Gradient décoratif */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ background: project.gradient }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/80 to-transparent pointer-events-none" aria-hidden="true" />

          <div className="container-main relative z-10">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 label-mono mb-8" aria-label="Fil d'Ariane">
              <Link href="/" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-150">
                ~/portfolio
              </Link>
              <span className="text-[var(--color-border)]" aria-hidden="true">/</span>
              <Link href="/#projects" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-150">
                projects
              </Link>
              <span className="text-[var(--color-border)]" aria-hidden="true">/</span>
              <span className="text-[var(--color-accent)]">{project.id}</span>
            </nav>

            {/* Header content */}
            <div className="max-w-[800px]">
              {/* Hash + status */}
              <div className="flex items-center gap-4 mb-4">
                <span className="project-hash">#{project.hash}</span>
                <span className={`font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-sm border ${STATUS_COLORS[project.status]}`}>
                  {STATUS_LABELS[project.status]}
                </span>
                <span className="label-mono">{project.year}</span>
              </div>

              {/* Title */}
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--color-text)] tracking-tight leading-[1.05] mb-4">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8 max-w-[600px]">
                {project.description}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap gap-6 mb-8">
                {cs && (
                  <>
                    <MetaItem label="durée" value={cs.duration} />
                    <MetaItem label="rôle" value={cs.role} />
                  </>
                )}
                <MetaItem label="type" value={project.type} />
              </div>

              {/* Stack */}
              <div className="mb-8">
                <p className="label-mono mb-3">// stack_utilisée</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--color-border)] text-[var(--color-text)] font-sans text-sm font-medium hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface)] transition-all duration-150">
                    <GitHubIcon /> Code source
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--color-accent)] text-white font-sans text-sm font-medium hover:opacity-90 active:scale-[0.97] transition-all duration-150">
                    <ExternalIcon /> Demo live
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── CORPS DE LA PAGE ─────────────────────────── */}
        {cs ? (
          <div className="container-main py-16 space-y-20 max-w-[900px]">

            {/* ── 1. CONTEXTE & PROBLÈME ───────────────── */}
            <CaseSection id="context" label="01" title="Contexte & Problème">
              <div className="space-y-8">

                {/* Situation */}
                <div>
                  <p className="label-mono mb-3">// situation_initiale</p>
                  <p className="text-base text-[var(--color-muted)] leading-relaxed">
                    {cs.context.situation}
                  </p>
                </div>

                {/* Problème */}
                <div className="
                  p-5 rounded-md
                  border-l-2 border-[var(--color-accent)]
                  bg-[var(--color-surface)]
                ">
                  <p className="label-mono mb-2 text-[var(--color-accent)]/70">// problème_identifié</p>
                  <p className="text-base text-[var(--color-text)] leading-relaxed">
                    {cs.context.problem}
                  </p>
                </div>

                {/* Objectifs */}
                <div>
                  <p className="label-mono mb-4">// objectifs[]</p>
                  <ul className="space-y-3" role="list">
                    {cs.context.goals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-mono text-xs text-[var(--color-accent)] mt-[3px] shrink-0 select-none">
                          [{String(i).padStart(2, '0')}]
                        </span>
                        <span className="text-sm text-[var(--color-muted)] leading-relaxed">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CaseSection>

            {/* ── 2. ARCHITECTURE ──────────────────────── */}
            {cs.architecture && (
              <CaseSection id="architecture" label="02" title="Architecture">
                <div className="space-y-8">
                  <p className="text-base text-[var(--color-muted)] leading-relaxed">
                    {cs.architecture.description}
                  </p>
                  <ArchitectureDiagram diagram={cs.architecture.diagram} />
                </div>
              </CaseSection>
            )}

            
            {cs.video && (
              <CaseSection id="video" label="03" title="Motion / Vidéo">
                <div className="space-y-4">
                  {cs.video.title && (
                    <p className="label-mono">// {cs.video.title}</p>
                  )}

                  <div className="rounded-md overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
                    <video
                      src={cs.video.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      className="w-full h-full object-cover"
                    >
                      <source src={cs.video.src} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                  </div>

                  {cs.video.caption && (
                    <p className="label-mono text-center px-4">{cs.video.caption}</p>
                  )}
                </div>
              </CaseSection>
            )}

            {/* ── 3. SCREENSHOTS ───────────────────────── */}
            {cs.screenshots && cs.screenshots.length > 0 && (
              <CaseSection id="screenshots" label="03" title="Visuels">
                <div className="space-y-6">
                  {cs.screenshots.map((shot, i) => (
                    <ScreenshotBlock key={i} shot={shot} index={i} gradient={project.gradient} />
                  ))}
                </div>
              </CaseSection>
            )}

          </div>
        ) : (
          /* Projet sans étude de cas — fallback propre */
          <div className="container-main py-16 max-w-[900px]">
            <div className="p-8 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-center">
              <p className="label-mono mb-3">// case_study: null</p>
              <p className="text-[var(--color-muted)] text-sm">
                L'étude de cas détaillée de ce projet n'est pas encore disponible.
              </p>
            </div>
          </div>
        )}

        {/* ── NAVIGATION PROJETS ───────────────────────── */}
        <nav
          className="border-t border-[var(--color-border)] py-8"
          aria-label="Navigation entre projets"
        >
          <div className="container-main flex items-center justify-between gap-4">

            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="group flex items-center gap-3 p-4 rounded-md border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-surface)] transition-all duration-150 flex-1 max-w-[300px]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors shrink-0" aria-hidden="true">
                  <path d="M19 12H5M12 5l-7 7 7 7"/>
                </svg>
                <div className="min-w-0">
                  <p className="label-mono mb-0.5">précédent</p>
                  <p className="font-display font-semibold text-sm text-[var(--color-text)] truncate">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}

            <Link
              href="/#projects"
              className="label-mono text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-150 shrink-0"
            >
              ↑ tous les projets
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex items-center gap-3 p-4 rounded-md border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-surface)] transition-all duration-150 flex-1 max-w-[300px] justify-end text-right"
              >
                <div className="min-w-0">
                  <p className="label-mono mb-0.5">suivant</p>
                  <p className="font-display font-semibold text-sm text-[var(--color-text)] truncate">{nextProject.title}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors shrink-0" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            ) : <div />}

          </div>
        </nav>

      </main>
      <Footer />
    </>
  )
}


function CaseSection({
  id, label, title, children
}: {
  id: string; label: string; title: string; children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`heading-${id}`}>
      <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-[var(--color-border)]">
        <span className="label-mono text-[var(--color-accent)]/60">{label}</span>
        <h2
          id={`heading-${id}`}
          className="font-display font-bold text-2xl text-[var(--color-text)]"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="label-mono">{label}</span>
      <span className="font-sans text-sm font-medium text-[var(--color-text)] capitalize">{value}</span>
    </div>
  )
}

function ScreenshotBlock({
  shot, index, gradient
}: {
  shot: { src: string; alt: string; caption?: string; format?: 'mobile' | 'desktop' };
  index: number;
  gradient: string
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const isMobile = shot.format === 'mobile'

  return (
    <figure className="space-y-3">
      <div
        className="
          relative rounded-md overflow-hidden
          border border-[var(--color-border)]
          bg-[var(--color-surface)]
          aspect-video
        "
      >
        {(!loaded || error) && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: gradient }}
            aria-hidden="true"
          >
            <div className="text-center">
              <p className="label-mono text-white/60 mb-1">
                // screenshot_{String(index + 1).padStart(2, '0')}
              </p>
              <p className="font-mono text-xs text-white/40">{shot.alt}</p>
            </div>
          </div>
        )}

        {!error && (
          <div className="absolute inset-0 p-3 md:p-4">
            {isMobile ? (
              <div className="h-full w-full flex items-center justify-center">
                <div className="relative h-full w-auto aspect-[9/19.5] max-w-[42%] md:max-w-[38%]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    quality={100}
                    className={`object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setLoaded(true)}
                    onError={() => setError(true)}
                    sizes="(max-width: 768px) 90vw, 380px"
                  />
                </div>
              </div>
            ) : (
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                quality={100}
                className={`object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            )}
          </div>
        )}

        <div className="absolute top-3 left-3 pointer-events-none z-10">
          <span className="project-hash bg-black/40 px-2 py-1 rounded-sm backdrop-blur-sm">
            screen_{String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {shot.caption && (
        <figcaption className="label-mono text-center px-4">
          {shot.caption}
        </figcaption>
      )}
    </figure>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}
