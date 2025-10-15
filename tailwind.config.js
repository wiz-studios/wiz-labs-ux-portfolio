/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-blue': '#4a9eff',
        'accent-green': '#4ade80',
        'accent-success': '#4ade80',
        'accent-purple': '#a855f7',
      },
      backgroundImage: {
        'tech-grid': `radial-gradient(circle at center, rgba(74, 158, 255, 0.04) 1px, transparent 1px),
          linear-gradient(to right, rgba(74, 158, 255, 0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(74, 158, 255, 0.02) 1px, transparent 1px)`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'tech-grid': '24px 24px',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'grid-pulse': 'grid-pulse 4s ease-in-out infinite',
        'scanline': 'scanline 6s linear infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'grid-pulse': {
          '0%, 100%': {
            opacity: '0.1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.15',
            transform: 'scale(1.02)',
          },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}