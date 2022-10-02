/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      xsm: {max: '500px'},
      sm:{max: '600px'} ,
      md: {max: '750px'},
      lg: {max: '850px'}
    },
    extend: {},
  },
  plugins: [],
}
