module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nightshade': ['Jim Nightshade', 'cursive'],
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        main: 'rgb(var(--color-main) / <alpha-value>)'
      }
    },
  },
  plugins: [],
}
