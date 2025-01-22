import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
  optimizeDeps: {
    exclude: ['@auth0/auth0-react']  // Exclude problematic dependency from optimization
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})