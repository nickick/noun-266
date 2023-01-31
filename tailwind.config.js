/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Syne', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      screens: {
        xs: '376px'
      }
    },
  },
  plugins: [],
}
