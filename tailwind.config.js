/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    extend: {
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
}

