/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FDFBF7',
          dark: '#F4EFE6',
          muted: '#FAF7F0',
        },
        sand: {
          DEFAULT: '#EFEBE4',
          light: '#F8F5F0',
          dark: '#E0D8CB',
        },
        terracotta: {
          DEFAULT: '#C86D51',
          hover: '#B55B40',
          soft: '#E8A590',
          light: '#F5DCD3',
        },
        sage: {
          DEFAULT: '#94A187',
          light: '#D3DDD0',
          dark: '#6E7C62',
        },
        forest: {
          DEFAULT: '#1A2E26',
          deep: '#112019',
          light: '#284439',
          card: '#1D332B',
        },
        charcoal: {
          DEFAULT: '#222220',
          muted: '#52504C',
          light: '#88847E',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'breath-expand': 'breath 8s ease-in-out infinite',
        'subtle-float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.4)', opacity: '0.95' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
