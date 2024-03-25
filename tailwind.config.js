/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'sky-blue': {
          '50': '#eefbfd',
          '100': '#d4f3f9',
          '200': '#afe8f2',
          '300': '#66d0e5',
          '400': '#3abad6',
          '500': '#1e9dbc',
          '600': '#1c7f9e',
          '700': '#1d6681',
          '800': '#20546a',
          '900': '#1f475a',
          '950': '#0f2e3d',
      },
      
      
      }
    },
  },
  plugins: [],
}

