/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#5BB4A9',
        'brand-secondary': '#80C97A',
        'brand-dark': '#1a1a1a',
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
      borderRadius: {
        'brand': '21px',
      },
      boxShadow: {
        'brand': '0 0 15px rgba(0, 0, 0, 0.12)',
        'brand-glow': '0 0 30px rgba(91, 180, 169, 0.3)',
      },
    },
  },
  plugins: [],
}
