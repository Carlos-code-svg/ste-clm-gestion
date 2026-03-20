/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ste: {
          pink: '#E91E63',
          darkPink: '#C2185B',
        }
      }
    },
  },
  plugins: [],
}
