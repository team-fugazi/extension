/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        high: 'rgba(211, 33, 44, 1)',
        medium: 'rgba(255, 104, 30, 1)',
        low: 'rgba(6, 156, 86, 1)',
      },
    },
    plugins: [],
  },
};
