const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors:{
      'primary' : "#2196f3"
   },
    extend: {
    
    },
  },
  plugins: [
  ],
})