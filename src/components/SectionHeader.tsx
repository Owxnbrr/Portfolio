interface SectionHeaderProps {
  id: string
  label: string
  title: string
  subtitle?: string
}

export function SectionHeader({ id, label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-2">
      <p className="label-mono mb-3">
        // section_{id} — {label}
      </p>
      <h2 className="font-display font-bold text-3xl md:text-[2.25rem] text-[var(--color-text)] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-[var(--color-muted)] max-w-[600px]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
