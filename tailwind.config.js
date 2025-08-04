/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./resources/js/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        section: "#1e293b",
        accent: "#38bdf8",
        light: "#f8fafc"
      },
      fontFamily: {
        inter: ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
} 