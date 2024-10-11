
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter : ["Inter", 'sans-serif']
      },
      borderRadius: {
        'one': '16px 32px 8px 32px',
        'two': '32px 16px 32px 8px;',
      },
      colors:{
        'primary' : "#08050E",
        'second' : "#484848",
        'gradient' : "#FFD952",
        'text' : "#909090",
      }
    },
  },
  plugins: [],
}