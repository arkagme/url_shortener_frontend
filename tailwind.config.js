/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0118',
        'blue-accent': '#3b82f6',
        'purple-accent': '#070111',
        'input-bg': 'rgba(30, 30, 46, 0.7)',
        'feature-circle': '#1e1e46',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}