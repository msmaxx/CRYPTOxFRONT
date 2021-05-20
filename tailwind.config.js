module.exports = {
  experimental: {
    applyComplexClasses: true,
    darkModeVariant: true
  },
  darkMode: "class",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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

