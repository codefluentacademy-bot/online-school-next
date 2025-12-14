/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        150: '600px',
        175: '700px',
        200: '800px',
      },
      maxHeight: {
        200: '800px', // for max-h-200
      },
      colors: {
        'programmer-bg': '#d6bcfa', // soft purple
        'programmer-bg-dark': '#2a2a2a', // dark mode alternative
      },
    },
  },
  plugins: [],
};
