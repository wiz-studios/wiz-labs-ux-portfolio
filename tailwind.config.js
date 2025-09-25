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
        'neon-blue': '#00f3ff',
        'neon-green': '#00ff9d',
        'neon-success': '#00ff9d',
        'neon-purple': '#bf00ff',
      },
      backgroundImage: {
        'tech-grid': `radial-gradient(circle at center, rgba(0, 243, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to right, rgba(0, 243, 255, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 243, 255, 0.05) 1px, transparent 1px)`,
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