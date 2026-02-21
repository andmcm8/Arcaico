/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        "background-charcoal": "#1A1A1A",
        "surface-dark": "#242424",
        "text-white": "#FFFFFF",
        "text-muted": "#A3A3A3",
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "4px",
        'lg': '8px',
        'xl': '12px',
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
