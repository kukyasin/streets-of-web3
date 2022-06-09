const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: colors.gray,
      black: colors.black,
      white: colors.white,
      'saffron': '#F5BD36',
      'pink': '#CE00A4',
    },
    extend: {
      fontFamily: {
        helveticaLight: 'HelveticaNeue-Light',
      },
      backgroundImage: {
        'details': "url('/images/details-bg.png')",
        'images': "url('/images/four-image.png')",
      }
    },
  },
  plugins: [],
}