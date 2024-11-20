/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { raw: '(min-width: 300px) and (max-width: 400px)' },
      },
      backgroundImage: {
        'tailwind-logo': 'linear-gradient(to right, #38BDF8, #06B6D4)',
      },
    },
  },
  plugins: [],
};
