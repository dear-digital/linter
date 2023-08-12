import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api1": "http://localhost:5000",
      "/ai-api": "https://jsonlint.com/",
    },
  },
  plugins: [react()],
});
