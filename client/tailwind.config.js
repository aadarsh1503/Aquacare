/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dyellow: "#fdbf6e",
        dpink:"#bc2041",
        hpink:"#a21936",
        dblack:"#1d1d1d",
        tblack:"#2a272b",
        tblue:"#ebf4ff",
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '15px': '17px',
        '44px':'150px',  // You can adjust the size as needed
      },
    },
  },
  plugins: [],
}
