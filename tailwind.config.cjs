module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mochaBase: '#1e1e2e',
        mochaSurface: '#313244',
        mochaText: '#cdd6f4',
        mochaSubtext: '#a6adc8',
      },
    },
  },
  plugins: [],
}