/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'index.html'
  ],
  theme: {
    extend: {
      colors:{
        utility_color:'rgb(179, 252, 3)',
      }
    },
  },
  plugins: [],
}