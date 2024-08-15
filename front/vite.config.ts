import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // Cambia 'build' a la carpeta que desees
  },
  plugins: [react()],
})
