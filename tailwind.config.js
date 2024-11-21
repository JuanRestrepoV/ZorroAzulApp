/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Fuente: ['Fuente', 'sans-serif'], // Fuente para el cuerpo
        FuenteTitulos: ['FuenteTitulos', 'sans-serif'], // Fuente para los títulos
      },
    },
  },
  plugins: [],
};
