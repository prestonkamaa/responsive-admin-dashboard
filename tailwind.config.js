/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
     // Or if using `src` directory: 
    "./src/**/*.{js,ts,jsx,tsx}",   
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {},
    fontFamily: { 
      sans: [
        'Proxima Nova',
        'Segoe UI',
        'sans-serif',
      ],
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require("@tailwindcss/forms"),
],
}
