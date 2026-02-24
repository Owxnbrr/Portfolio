'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { PROFILE } from '@/data/portfolio'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Projets',      href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Parcours',    href: '#experience' },
  { label: 'À propos',    href: '#about' },
  { label: 'Contact',     href: '#contact' },
]

export function Header() {
  const { theme, toggle, mounted } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 h-14
          transition-all duration-300
          ${scrolled
            ? 'border-b border-[var(--color-border)]'
            : 'border-b border-transparent'
          }
        `}
        style={{ backdropFilter: 'blur(12px)', backgroundColor: 'color-mix(in srgb, var(--color-bg) 80%, transparent)' }}
      >
        <div className="container-main h-full flex items-center justify-between">

          <a
          href="#"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-150"
          aria-label="Retour en haut"
          onClick={() => setMenuOpen(false)}
        >
          {mounted ? (
            <Image
              src={theme === 'dark'
                ? '/project-assets/logo-light.svg'
                : '/project-assets/logo-dark.svg'}
              alt="Logo"
              width={34}
              height={34}
              priority
              className="h-8 w-auto"
            />
          ) : (
            <div className="h-8 w-8 rounded bg-[var(--color-surface)] border border-[var(--color-border)]" />
          )}
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  relative text-sm tracking-wider uppercase font-mono
                  transition-colors duration-150
                  after:absolute after:bottom-[-3px] after:left-0 after:right-0
                  after:h-[2px] after:bg-[var(--color-accent)]
                  after:transition-transform after:duration-200 after:origin-left
                  ${activeSection === link.href.replace('#', '')
                    ? 'text-[var(--color-accent)] after:scale-x-100'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-text)] after:scale-x-0'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggle}
                className="
                  w-9 h-9 rounded-full flex items-center justify-center
                  text-[var(--color-muted)] hover:text-[var(--color-text)]
                  hover:bg-[var(--color-surface)]
                  border border-[var(--color-border)]
                  transition-all duration-150
                  focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]
                "
                aria-label={`Passer au thème ${theme === 'dark' ? 'clair' : 'sombre'}`}
                title={`Thème ${theme === 'dark' ? 'Blueprint' : 'Terminal'}`}
              >
                {theme === 'dark' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>
            )}

            <button
              className="
                md:hidden w-9 h-9 rounded-md flex items-center justify-center
                text-[var(--color-muted)] hover:text-[var(--color-text)]
                hover:bg-[var(--color-surface)]
                border border-[var(--color-border)]
                transition-all duration-150
              "
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <div className="w-4 flex flex-col gap-[5px]">
                <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-opacity duration-300
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
      />
      <nav
        className={`
          fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden
          bg-[var(--color-surface)] border-l border-[var(--color-border)]
          flex flex-col pt-20 px-6 gap-1
          transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="
              py-3 px-4 rounded-md font-mono text-sm tracking-wider uppercase
              text-[var(--color-muted)] hover:text-[var(--color-text)]
              hover:bg-[var(--color-bg)]
              border border-transparent hover:border-[var(--color-border)]
              transition-all duration-150
            "
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
          >
            {link.label}
          </a>
        ))}

        <div className="mt-auto pb-8 border-t border-[var(--color-border)] pt-6">
          <p className="label-mono mb-2">// thème actuel</p>
          <button
            onClick={() => { toggle(); setMenuOpen(false) }}
            className="
              w-full py-2 px-4 rounded-md font-mono text-sm
              text-[var(--color-accent)] border border-[var(--color-accent)]/30
              hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-accent)]/5
              transition-all duration-150
            "
          >
            {mounted ? (theme === 'dark' ? '> switch blueprint' : '> switch terminal') : '> switch theme'}
          </button>
        </div>
      </nav>
    </>
  )
}
