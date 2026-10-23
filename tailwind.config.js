/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#593d2c',
        paper: '#f7f5ee',
        cream: '#ece4d8',
        gold: '#b08a63',
      },
      fontFamily: {
        serif: ['Baskerville', '"Times New Roman"', 'serif'],
        display: ['"Viaoda Libre"', '"EB Garamond"', 'serif'],
        title: ['"Playfair Display"', '"Times New Roman"', 'serif'],
        script: ['"The Nautigal"', 'cursive'],
        ampersand: ['"Ms Madi"', '"Playfair Display"', 'serif'],
        body: ['Lora', 'Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
}
