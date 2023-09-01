/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#1A222A',
          DEFAULT: '#0E1318',
        },
        white: {
          DEFAULT: 'white',
          light: '#C9C9C9'
        }
      },
      fontFamily: {
        DEFAULT: ['Lato'],
      },
    },
  },
  plugins: [],
}
