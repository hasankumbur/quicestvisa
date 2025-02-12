/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f4f9',
          100: '#e7e9f4',
          200: '#d0d3e8',
          300: '#b8bdd8',
          400: '#8f95be',
          500: '#3f4679', // Medium navy
          600: '#363c6b',
          700: '#2d3159', // Deep navy
          800: '#282a4a',
          900: '#1e213c', // Darkest navy (from image)
        },
        secondary: {
          50: '#fef2f3',
          100: '#fee2e4',
          200: '#fecacd',
          300: '#fca5aa',
          400: '#f87178',
          500: '#b91c1c', // Medium red
          600: '#991b1b',
          700: '#7f1d1d', // Deep red
          800: '#701a1a',
          900: '#521515', // Darkest red (from image)
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
} 