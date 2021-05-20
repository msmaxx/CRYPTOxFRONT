module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    heme: {
      nightwind: {
        typography: true,
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require("nightwind")
  ],
}

