/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      sm:{max: '500px'} ,
      md: {max: '700px'},
      lg: {max: '850px'}
    },
    extend: {},
  },
  plugins: [],
}
