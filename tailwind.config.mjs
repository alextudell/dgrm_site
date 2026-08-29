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
    },
  },
  plugins: [typography],
};
