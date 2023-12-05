/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cream": "hsl(30, 38%, 92%)",
        "darkcyan": "hsl(158, 36%, 37%)",
        "darkblue": "hsl(212, 21%, 14%)",
        "dgblue": "hsl(228, 12%, 48%)"
      }
    },
  },
  plugins: [],
}