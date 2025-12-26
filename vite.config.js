import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: 如果你改 repo 名稱，請同步更新 base
export default defineConfig({
  base: '/eric-personal-website/',
  plugins: [react()]
})
