/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          light: 'gray',
          DEFAULT: 'black',
        },
        white: '#C5C6C7',
      },
      fontFamily: {
        display: ['Montserrat'],
        body: ['Roboto'],
      },
    },
  },
  plugins: [],
}
