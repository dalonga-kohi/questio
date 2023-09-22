/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: {
          light: '#1A222A',
          darker: '#060709',
          DEFAULT: '#0E1318',
        },
        white: {
          DEFAULT: '#e6e6e6',
          light: '#C9C9C9',
        },
        accent: '#5bd477',
      },
    },
  },
  plugins: [],
}
