/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        dark: "#0F172A",
      },
    },
  },
  plugins: [],
}
