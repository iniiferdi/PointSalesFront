
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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