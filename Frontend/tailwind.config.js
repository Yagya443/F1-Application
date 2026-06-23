/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'f1-red': '#E10600',
        'f1-dark': '#050505',
        'f1-card': '#0F0F0F',
        'f1-border': '#1A1A1A',
        'f1-muted': '#6B7280',
        'f1-silver': '#C0C0C0',
      },
      fontFamily: {
        'display': ['Formula1', 'Bebas Neue', 'Impact', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-red': 'pulse-red 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.6s ease-out',
        'countdown-tick': 'countdown-tick 1s ease-in-out',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(225, 6, 0, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(225, 6, 0, 0)' },
        },
        'slide-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
