module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'myCustom': 'goldenrod'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
