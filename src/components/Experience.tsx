import { EXPERIENCES } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'

const TYPE_ICON: Record<'work' | 'education', string> = {
  work: '◆',
  education: '◇',
}

export function Experience() {
  const work = EXPERIENCES.filter(e => e.type === 'work')
  const edu  = EXPERIENCES.filter(e => e.type === 'education')

  return (
    <section id="experience" className="py-24 border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader
          id="04"
          label="parcours"
          title="Expériences & Formation"
          subtitle="Chaque entrée est un commit dans mon historique professionnel."
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <TimelineColumn title="// work_history" items={work} />
          <TimelineColumn title="// education_log" items={edu} />
        </div>
      </div>
    </section>
  )
}

interface TimelineColumnProps {
  title: string
  items: typeof EXPERIENCES
}

function TimelineColumn({ title, items }: TimelineColumnProps) {
  return (
    <div>
      <p className="label-mono mb-6 text-[var(--color-accent)]/70">{title}</p>

      <div className="relative">
        {/* Vertical line */}
        <div className="
          absolute left-[7px] top-3 bottom-3
          w-px bg-[var(--color-border)]
        " aria-hidden="true" />

        <div className="space-y-8">
          {items.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TimelineItem({ exp, index }: { exp: typeof EXPERIENCES[0]; index: number }) {
  return (
    <div
      className="relative pl-8 reveal-left"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Node */}
      <div className="
        absolute left-0 top-1
        w-[15px] h-[15px] rounded-full
        border-2 border-[var(--color-accent)]
        bg-[var(--color-bg)]
        flex items-center justify-center
      " aria-hidden="true">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] block" />
      </div>

      {/* Date range */}
      <p className="label-mono mb-2 text-[var(--color-muted)]">
        {exp.dateRange}
      </p>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-[var(--color-text)] leading-tight">
        {exp.title}
      </h3>

      {/* Company */}
      <p className="font-sans text-sm text-[var(--color-accent)] font-medium mt-0.5 mb-2">
        {exp.company} · {exp.location}
      </p>

      {/* Description */}
      <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
        {exp.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {exp.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}
