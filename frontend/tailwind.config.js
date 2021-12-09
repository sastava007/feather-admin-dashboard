// tailwind.config.js
module.exports = {
  purge: [false],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'feather-purple': '#7472ed'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
