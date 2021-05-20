module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
      require("nightwind")
  ],
}

