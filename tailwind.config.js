/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // ── COLORS (mapped to CSS vars) ─────────────────────────
      colors: {
        bg:      'var(--color-bg)',
        surface: 'var(--color-surface)',
        text:    'var(--color-text)',
        muted:   'var(--color-muted)',
        accent:  'var(--color-accent)',
        border:  'var(--color-border)',
        danger:  'var(--color-danger)',
        success: 'var(--color-success)',
      },

      // ── FONTS ───────────────────────────────────────────────
      fontFamily: {
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'Menlo', 'monospace'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },

      // ── FONT SIZES ──────────────────────────────────────────
      fontSize: {
        'xs':    ['0.6875rem', { lineHeight: '1.5',  letterSpacing: '0.06em' }],  // 11px — badge
        'sm':    ['0.8125rem', { lineHeight: '1.5',  letterSpacing: '0.02em' }],  // 13px — meta
        'base':  ['1rem',      { lineHeight: '1.65', letterSpacing: '0' }],        // 16px — body
        'lg':    ['1.125rem',  { lineHeight: '1.5',  letterSpacing: '0' }],        // 18px — lead
        'xl':    ['1.25rem',   { lineHeight: '1.4',  letterSpacing: '0' }],        // 20px — h3 body
        '2xl':   ['1.5rem',    { lineHeight: '1.3',  letterSpacing: '-0.01em' }],  // 24px — h3
        '3xl':   ['2.25rem',   { lineHeight: '1.2',  letterSpacing: '-0.01em' }],  // 36px — h2
        '4xl':   ['2.75rem',   { lineHeight: '1.1',  letterSpacing: '-0.02em' }],  // 44px — h1 sm
        '5xl':   ['3.5rem',    { lineHeight: '1.05', letterSpacing: '-0.02em' }],  // 56px — h1
        '6xl':   ['5rem',      { lineHeight: '0.95', letterSpacing: '-0.04em' }],  // 80px — hero
      },

      // ── SPACING (base 4px) ──────────────────────────────────
      spacing: {
        '1':  '4px',
        '2':  '8px',
        '3':  '12px',
        '4':  '16px',
        '6':  '24px',
        '8':  '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
        '32': '128px',
      },

      // ── BORDER RADIUS ───────────────────────────────────────
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'full': '9999px',
      },

      // ── MAX-WIDTH ───────────────────────────────────────────
      maxWidth: {
        'container': '1280px',
        'prose': '680px',
      },

      // ── TRANSITIONS ─────────────────────────────────────────
      transitionDuration: {
        '80':  '80ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.4,0,0.2,1)',
        'spring': 'cubic-bezier(0.34,1.56,0.64,1)',
      },

      // ── SHADOWS / GLOW ───────────────────────────────────────
      boxShadow: {
        'sm':   '0 1px 3px rgba(0,0,0,0.3)',
        'md':   '0 4px 16px rgba(0,0,0,0.4)',
        'glow': '0 0 12px rgba(14,165,233,0.15)',
        'glow-strong': '0 0 20px rgba(14,165,233,0.25)',
      },

      // ── ANIMATION ───────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up':       'fade-up 500ms cubic-bezier(0.4,0,0.2,1) forwards',
        'fade-in':       'fade-in 400ms ease-out forwards',
        'slide-in-left': 'slide-in-left 400ms cubic-bezier(0.4,0,0.2,1) forwards',
        'blink':         'blink 1000ms step-end infinite',
        'scale-in':      'scale-in 200ms cubic-bezier(0.34,1.56,0.64,1) forwards',
      },
    },
  },
  plugins: [],
}
