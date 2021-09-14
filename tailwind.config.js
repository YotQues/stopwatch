const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      "80": '20rem'
    },
    minWidth: {
      "80": '20rem'
    },
    screens: {
      'xs': { 'raw': '(min-width: 475px)' },
      'portrait': { 'raw': '(orientation: portrait)' },
      'landscape': { 'raw': '(orientation: landscape)' },
      'xs-portrait': { 'raw': '(orientation: portrait) and (min-width: 475px)' },
      'xs-landscape': { 'raw': '(orientation: landscape)  and (min-width: 475px)' },
      'sm-portrait': { 'raw': '(orientation: portrait) and (min-width: 639px)' },
      'sm-landscape': { 'raw': '(orientation: landscape)  and (min-width: 639px)' },
      'md-portrait': { 'raw': '(orientation: portrait) and (min-width: 767px)' },
      'md-landscape': { 'raw': '(orientation: landscape)  and (min-width: 767px)' },
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        '128': '32rem'
      }
    },
  },
  variants: {
    shadow: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {
      spacing: {
        '104': '27rem',
        '112': '30rem',
      }
    },
  },
  plugins: [],
}
