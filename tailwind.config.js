/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medfo-blue': '#1976d2',
        'medfo-teal': '#0097a7',
      },
    },
  },
  plugins: [],
}
