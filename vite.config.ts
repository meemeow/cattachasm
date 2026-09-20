import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from https://meemeow.github.io/cattachasm/, not a domain root.
  base: '/cattachasm/',
})
