module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '128': '32rem'
      }
    },
  },
  variants: {
    shadow: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {},
  },
  plugins: [],
}
