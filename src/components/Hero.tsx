'use client'

import { useEffect, useRef, useState } from 'react'
import { PROFILE } from '@/data/portfolio'

const ROLES = [
  'développeur web',
  'alternant React/Next.js',
  'constructeur d\'interfaces',
  'fan des détails',
]

function useTypewriter(strings: string[], speed = 70, pause = 1600) {
  const [display, setDisplay] = useState('')
  const [cursor, setCursor] = useState(true)
  const index = useRef(0)
  const charIndex = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    const blinkId = setInterval(() => setCursor(c => !c), 530)
    return () => clearInterval(blinkId)
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(strings[0])
      return
    }

    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      const current = strings[index.current]

      if (!deleting.current) {
        charIndex.current++
        setDisplay(current.slice(0, charIndex.current))

        if (charIndex.current === current.length) {
          deleting.current = true
          timeout = setTimeout(tick, pause)
          return
        }
      } else {
        charIndex.current--
        setDisplay(current.slice(0, charIndex.current))

        if (charIndex.current === 0) {
          deleting.current = false
          index.current = (index.current + 1) % strings.length
        }
      }

      timeout = setTimeout(tick, deleting.current ? speed / 2 : speed)
    }

    timeout = setTimeout(tick, 500)
    return () => clearTimeout(timeout)
  }, [strings, speed, pause])

  return { display, cursor }
}

export function Hero() {
  const { display, cursor } = useTypewriter(ROLES)

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] md:min-h-screen flex items-start md:items-center pt-20 md:pt-14 overflow-hidden"      aria-label="Introduction"
    >
      <div className="hero-glow" aria-hidden="true" />

      <div className="container-main relative z-10 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-center">

          <div>
            <p
              className="label-mono mb-6 animate-fade-in"
              style={{ animationDelay: '0ms' }}
            >
              // développeur web & alternant
            </p>

            <h1
              className="
                font-display font-extrabold leading-[0.95]
                text-4xl md:text-[5rem]
                tracking-[-0.04em]
                text-[var(--color-text)]
                animate-fade-up
              "
              style={{ animationDelay: '100ms' }}
            >
              {PROFILE.name.split(' ').map((part, i) => (
                <span key={i} className={i === 1 ? 'block text-[var(--color-accent)]' : 'block'}>
                  {part}
                </span>
              ))}
            </h1>

            <p
              className="
                mt-6 text-lg text-[var(--color-muted)] max-w-[480px]
                animate-fade-up
              "
              style={{ animationDelay: '200ms' }}
            >
              {PROFILE.tagline}
            </p>

            <div
              className="
                mt-5 font-mono text-base text-[var(--color-text)]
                animate-fade-up
              "
              style={{ animationDelay: '280ms' }}
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="text-[var(--color-muted)]">$ whoami → </span>
              <span className="text-[var(--color-accent)]">{display}</span>
              <span
                className={`inline-block w-[2px] h-[1em] ml-[2px] bg-[var(--color-accent)] align-middle transition-opacity duration-100 ${cursor ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden="true"
              />
            </div>

            <div
              className="
                mt-10 flex flex-wrap gap-4
                animate-fade-up
              "
              style={{ animationDelay: '360ms' }}
            >
              <a
                href="#projects"
                className="
                  inline-flex items-center gap-2
                  px-6 py-3 rounded-md
                  bg-[var(--color-accent)] text-white
                  font-sans font-semibold text-sm
                  hover:opacity-90 hover:shadow-glow
                  active:scale-[0.97]
                  transition-all duration-150
                "
              >
                Voir mes projets
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a
                href="#contact"
                className="
                  inline-flex items-center gap-2
                  px-6 py-3 rounded-md
                  text-[var(--color-text)] font-sans font-semibold text-sm
                  border border-[var(--color-border)]
                  hover:border-[var(--color-accent)]/40
                  hover:bg-[var(--color-surface)]
                  active:scale-[0.97]
                  transition-all duration-150
                "
              >
                Me contacter
              </a>
            </div>

            <div
              className="mt-8 animate-fade-up"
              style={{ animationDelay: '440ms' }}
            >
              <span className="
                inline-flex items-center gap-2
                font-mono text-xs text-[var(--color-muted)]
              ">
                <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" aria-hidden="true" />
                {PROFILE.availability}
              </span>
            </div>
          </div>

          <div
            className="
              hidden lg:block
              animate-fade-up
            "
            style={{ animationDelay: '200ms' }}
            aria-hidden="true"
          >
            <Terminal />
          </div>
        </div>

        <div
          className="
            hidden md:flex
            absolute bottom-8 left-1/2 -translate-x-1/2
            flex-col items-center gap-2
            animate-fade-in
            text-[var(--color-muted)]
          "
          style={{ animationDelay: '800ms' }}
          aria-hidden="true"
        >
          <span className="label-mono">scroll</span>
          <div className="w-px h-8 bg-[var(--color-border)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-accent)] animate-[slide-down_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Terminal() {
  const lines = [
    { prefix: '$ ', content: 'node --version', color: 'text-[var(--color-text)]' },
    { prefix: '  ', content: 'v20.11.0', color: 'text-[var(--color-success)]' },
    { prefix: '$ ', content: 'git log --oneline -5', color: 'text-[var(--color-text)]' },
    { prefix: '  ', content: 'a3f2c8d feat: add dark theme toggle', color: 'text-[var(--color-muted)]' },
    { prefix: '  ', content: 'b8e1f4a fix: mobile nav z-index', color: 'text-[var(--color-muted)]' },
    { prefix: '  ', content: 'c2d7e9b refactor: extract hooks', color: 'text-[var(--color-muted)]' },
    { prefix: '  ', content: 'd4c8f2e feat: scroll progress bar', color: 'text-[var(--color-muted)]' },
    { prefix: '  ', content: 'e7a1b3c chore: init portfolio v2', color: 'text-[var(--color-muted)]' },
    { prefix: '$ ', content: 'npm run build', color: 'text-[var(--color-text)]' },
    { prefix: '  ', content: '✓ Compiled successfully', color: 'text-[var(--color-success)]' },
    { prefix: '  ', content: '  Route (app)  Size', color: 'text-[var(--color-muted)]' },
    { prefix: '  ', content: '  /            4.2 kB', color: 'text-[var(--color-accent)]' },
    { prefix: '$ ', content: '_', color: 'text-[var(--color-accent)]' },
  ]

  return (
    <div className="
      rounded-lg overflow-hidden
      border border-[var(--color-border)]
      shadow-md
      font-mono text-sm
    ">
      <div className="
        flex items-center gap-2 px-4 py-3
        bg-[var(--color-surface)]
        border-b border-[var(--color-border)]
      ">
        <div className="w-3 h-3 rounded-full bg-[var(--color-danger)]/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-[var(--color-success)]/80" />
        <span className="ml-3 text-xs text-[var(--color-muted)]">Noah@portfolio — zsh</span>
      </div>

      <div className="
        bg-[var(--color-bg)] p-5
        space-y-[2px]
      ">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`flex gap-1 ${line.color} animate-fade-in`}
            style={{ animationDelay: `${400 + i * 60}ms` }}
          >
            <span className="text-[var(--color-muted)] select-none shrink-0">{line.prefix}</span>
            <span className={i === lines.length - 1 ? 'animate-blink' : ''}>{line.content}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
