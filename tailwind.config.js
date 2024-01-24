/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      colors:{
        blacky:"#262626"
      },
      screens:{
        phone:"450px",
        bigphone:"650px",
        tablet:"860px",
        laptop:"1200px",
      }
    },
  },
  plugins: [],
}

