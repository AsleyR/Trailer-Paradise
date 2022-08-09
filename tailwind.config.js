/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signup': "url('../public/images/movieNetflix.jpg')",
        'forest': "url('../public/images/forestBg.jpg')",
        'moviecinema': "url('../public/images/movieCinema.jpg')",
      },
      colors: {
      'bg1': "#2b2d42",
      'bg2': "#8d99ae",
      'col1': "#d80032",
      'col2': "#ef233c",
      'extracol': "edf2f4",
      'dark1': "#020412"
    },
    },
  },
  plugins: [],
}
