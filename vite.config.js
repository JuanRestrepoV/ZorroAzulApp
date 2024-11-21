import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias para la carpeta `src`
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend local en desarrollo
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Elimina `/api` de las solicitudes
      },
    },
  },
  build: {
    outDir: 'dist', // Directorio de salida para producción
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Divide las dependencias principales en un archivo separado
        },
      },
    },
  },
  define: {
    'process.env': {}, // Asegura la compatibilidad con `process.env` en Vite
  },
})
