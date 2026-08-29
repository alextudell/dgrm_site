import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-canvas)',
        surface: {
          DEFAULT: 'var(--bg-surface)',
          elevated: 'var(--bg-surface-elevated)',
          soft: 'var(--bg-surface-soft)',
        },
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          light: '#6366F1',
          glow: 'rgba(99, 102, 241, 0.25)',
        },
        accent: {
          rocket: '#F59E0B',
          'rocket-soft': 'rgba(245, 158, 11, 0.15)',
          gold: '#D97706',
          ai: '#8B5CF6',
          'ai-soft': 'rgba(139, 92, 246, 0.15)',
          vault: '#10B981',
          'vault-soft': 'rgba(16, 185, 129, 0.15)',
        },
        success: '#10B981',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          highlight: 'var(--border-highlight)',
        },
      },
      spacing: {
        'section-y': 'clamp(3.5rem, 6vw, 5rem)',
        'section-gap': 'clamp(3rem, 5vw, 4rem)',
      },
      borderRadius: {
        'squircle-sm': '12px',
        'squircle-md': '16px',
        'squircle-lg': '24px',
        'squircle-xl': '32px',
        'squircle-2xl': '40px',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        widest: '0.08em',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-smooth': 'cubic-bezier(0.32, 0.72, 0, 1)',
        'tactile': 'cubic-bezier(0.2, 0, 0, 1)',
      },
      transitionDuration: {
        'instant': '150ms',
        'tactile': '250ms',
        'flow': '450ms',
        'cinematic': '700ms',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text-secondary)',
            '--tw-prose-headings': 'var(--text-primary)',
            '--tw-prose-lead': 'var(--text-secondary)',
            '--tw-prose-links': '#4F46E5',
            '--tw-prose-bold': 'var(--text-primary)',
            '--tw-prose-counters': 'var(--text-muted)',
            '--tw-prose-bullets': 'var(--text-muted)',
            '--tw-prose-hr': 'var(--border-subtle)',
            '--tw-prose-quotes': 'var(--text-primary)',
            '--tw-prose-quote-borders': 'var(--border-highlight)',
            '--tw-prose-captions': 'var(--text-muted)',
            '--tw-prose-code': '#4F46E5',
            '--tw-prose-pre-code': 'var(--text-primary)',
            '--tw-prose-pre-bg': 'var(--bg-surface-soft)',
            '--tw-prose-th-borders': 'var(--border-subtle)',
            '--tw-prose-td-borders': 'var(--border-subtle)',
            '--tw-prose-invert-body': 'var(--text-secondary)',
            '--tw-prose-invert-headings': 'var(--text-primary)',
            '--tw-prose-invert-lead': 'var(--text-secondary)',
            '--tw-prose-invert-links': '#818CF8',
            '--tw-prose-invert-bold': 'var(--text-primary)',
            '--tw-prose-invert-counters': 'var(--text-muted)',
            '--tw-prose-invert-bullets': 'var(--text-muted)',
            '--tw-prose-invert-hr': 'var(--border-subtle)',
            '--tw-prose-invert-quotes': 'var(--text-primary)',
            '--tw-prose-invert-quote-borders': 'var(--border-highlight)',
            '--tw-prose-invert-captions': 'var(--text-muted)',
            '--tw-prose-invert-code': '#A78BFA',
            '--tw-prose-invert-pre-code': 'var(--text-primary)',
            '--tw-prose-invert-pre-bg': 'var(--bg-surface-soft)',
            '--tw-prose-invert-th-borders': 'var(--border-subtle)',
            '--tw-prose-invert-td-borders': 'var(--border-subtle)',
            color: 'var(--text-secondary)',
            a: {
              color: '#4F46E5',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'var(--text-primary)',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            strong: {
              color: 'var(--text-primary)',
              fontWeight: '600',
            },
            code: {
              color: '#4F46E5',
              backgroundColor: 'var(--bg-surface-soft)',
              borderRadius: '0.375rem',
              paddingLeft: '0.375rem',
              paddingRight: '0.375rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
              fontWeight: '400',
              '&::before': {
                content: 'none !important',
              },
              '&::after': {
                content: 'none !important',
              },
            },
            table: {
              borderCollapse: 'collapse',
              width: '100%',
            },
            th: {
              backgroundColor: 'var(--bg-surface-elevated)',
              color: 'var(--text-primary)',
              textAlign: 'left',
              padding: '0.75rem',
            },
            td: {
              padding: '0.75rem',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
