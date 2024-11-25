/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '90vw': '90vw',
        '80vw': '80vw'
      }
    },
  },
  plugins: [],
}

