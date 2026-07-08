import { SERVICES } from '@/data/portfolio'
import { SectionHeader } from './SectionHeader'

export function Services() {
  return (
    <section id="services" className="py-24 border-t border-[var(--color-border)]">
      <div className="container-main">
        <SectionHeader
          id="01"
          label="services"
          title="Prestations web"
          subtitle="Des sites clairs, rapides et maintenables, pensés pour vos objectifs et votre quotidien."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {SERVICES.map((service, index) => (
            <article key={service.id} className="card p-5 flex flex-col min-h-[190px]">
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className="label-mono text-[var(--color-accent)]">
                  service_{String(index + 1).padStart(2, '0')}
                </span>
                <span className="project-hash">#{service.id}</span>
              </div>

              <h3 className="font-display font-semibold text-xl text-[var(--color-text)] leading-tight mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
