/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#164B35',
          dark: '#0e3324',
          light: '#1d5e43',
        },
        emerald: {
          DEFAULT: '#228B5A',
          dark: '#1b724a',
          light: '#2bb172',
        },
        sage: {
          DEFAULT: '#A8C9A5',
          light: '#c3ddc0',
          dark: '#8eb38b',
        },
        mint: {
          DEFAULT: '#DDF2E1',
          light: '#eef9f1',
          dark: '#c4e7cb',
        },
        offwhite: {
          DEFAULT: '#F7FAF6',
          card: '#FFFFFF',
          dark: '#EEF3EC',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
