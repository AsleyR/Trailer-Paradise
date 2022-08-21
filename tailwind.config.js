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
        'moviecinema2': "url('../public/images/movieCinema2.jpg')",
        'moviecinema3': "url('../public/images/movieCinema3.jpg')"
      },
      colors: {
      'bg1': "#2b2d42",
      'bg2': "#8d99ae",
      'col1': "#BD002C",
      'col2': "#D80032",
      'extracol': "edf2f4",
      'dark1': "#060606",
      'dark2': "#181818",
      'dark3': "#0F0F0F",
      'gray1': "#404040",
      'gray2': "#525252",
      'gray3': "#8C8C8C"
      },
    },
  },
  plugins: [],
}
