'use client'

import { useState } from 'react'
import { SKILLS, type Skill } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'

const LEVEL_COLORS: Record<Skill['level'], string> = {
  '// daily':    'text-[var(--color-success)]',
  '// learning': 'text-[var(--color-accent)]',
  '// familiar': 'text-[var(--color-muted)]',
}

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-24 border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader
          id="03"
          label="compétences"
          title="Stack & outils"
          subtitle="Pas de barres de progression. Des preuves : chaque techno est liée aux projets qui l'utilisent."
        />

        <div className="mt-10 space-y-10">
          {SKILLS.map(group => (
            <div key={group.id}>
              <p className="label-mono mb-4 text-[var(--color-accent)]/70">
                {group.label}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {group.skills.map((skill, i) => (
                  <SkillModule
                    key={skill.name}
                    skill={skill}
                    index={i}
                    isHovered={hoveredSkill === skill.name}
                    onHover={setHoveredSkill}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="
          mt-12 p-5 rounded-md
          border border-[var(--color-border)]
          bg-[var(--color-surface)]
          flex flex-wrap items-center gap-4
        ">
          <div>
            <p className="label-mono mb-1">// actuellement en apprentissage</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Playwright (E2E)', 'React Testing Library', 'Web perf (Lighthouse)', 'Accessibilité (WCAG)'].map(item => (
                <span key={item} className="tag" style={{
                  borderColor: 'rgba(var(--color-accent-rgb), 0.15)',
                  background: 'rgba(var(--color-accent-rgb), 0.05)',
                  color: 'var(--color-muted)',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillModuleProps {
  skill: Skill
  index: number
  isHovered: boolean
  onHover: (name: string | null) => void
}

function SkillModule({ skill, index, isHovered, onHover }: SkillModuleProps) {
  return (
    <div
      className={`
        relative p-4 rounded-md cursor-default select-none
        border transition-all duration-150
        ${isHovered
          ? 'border-[var(--color-accent)]/40 bg-[var(--color-accent)]/4'
          : 'border-[var(--color-border)] bg-[var(--color-surface)]'
        }
        animate-scale-in
      `}
      style={{ animationDelay: `${index * 40}ms` }}
      onMouseEnter={() => onHover(skill.name)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`
        font-mono font-semibold text-base mb-2 transition-colors duration-150
        ${isHovered ? 'text-[var(--color-accent)]' : 'text-[var(--color-text)]'}
      `}>
        {skill.icon}
      </div>

      <p className="font-sans text-sm font-medium text-[var(--color-text)] leading-tight mb-1">
        {skill.name}
      </p>

      <p className={`font-mono text-[10px] ${LEVEL_COLORS[skill.level]}`}>
        {skill.level}
      </p>

      {skill.projects && skill.projects.length > 0 && (
        <div className="absolute top-2 right-2">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/50 block"
            title={`Utilisé dans ${skill.projects.length} projet(s)`}
          />
        </div>
      )}
    </div>
  )
}
