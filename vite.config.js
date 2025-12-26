import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/eric-personal-website/',
  plugins: [react()]
})
