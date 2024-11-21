import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Puedes usar `@` como alias para la carpeta `src` en las importaciones
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Si tu backend está en el puerto 5000 (ajusta según sea necesario)
    },
  },
  build: {
    outDir: 'dist', // Asegúrate de que el directorio de salida sea 'dist'
  },
})
