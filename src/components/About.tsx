import { PROFILE } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'

const INTERESTS = [
  { icon: '⬡', label: 'Sport', desc: 'escalade, salle' },
  { icon: '⬡', label: 'E-sport', desc: 'joueur en équipe EVA (VR arena), coordination & stratégie' },
  { icon: '⬡', label: 'Culture visuelle', desc: 'cinéma, typographie, photo' },
  { icon: '⬡', label: 'Design systèmes', desc: 'accessibilité, détails, cohérence' },
]

export function About() {
  return (
    <section id="about" className="py-24 border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader
          id="05"
          label="à propos"
          title="L'humain derrière le code"
        />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">

          <div className="space-y-5">
            <p className="label-mono">// bio.txt</p>
            {PROFILE.bio.split('\n').filter(Boolean).map((para, i) => (
              <p key={i} className="text-base text-[var(--color-muted)] leading-relaxed">
                {para.trim()}
              </p>
            ))}

            <div className="pt-2 space-y-2">
              <InfoRow label="location" value={PROFILE.location} />
              <InfoRow label="status" value={PROFILE.availability} accent />
              <InfoRow label="email" value={PROFILE.email} />
            </div>
          </div>

          <div>
            <p className="label-mono mb-4">// centres_interet[]</p>
            <div className="space-y-3">
              {INTERESTS.map(item => (
                <div
                  key={item.label}
                  className="
                    flex items-start gap-3 p-4
                    border border-[var(--color-border)] rounded-md
                    bg-[var(--color-surface)]
                    hover:border-[var(--color-accent)]/20
                    transition-colors duration-150
                  "
                >
                  <span className="text-[var(--color-accent)] mt-0.5 shrink-0 text-lg" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-sans font-medium text-sm text-[var(--color-text)]">{item.label}</p>
                    <p className="font-mono text-xs text-[var(--color-muted)] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-3 font-mono text-sm">
      <span className="text-[var(--color-muted)] w-20 shrink-0">{label}:</span>
      <span className={accent ? 'text-[var(--color-success)]' : 'text-[var(--color-text)]'}>
        {accent && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-success)] mr-2 align-middle" />}
        {value}
      </span>
    </div>
  )
}
