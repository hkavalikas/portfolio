import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          icons: ['simple-icons/icons'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
