import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/eric-personal-website/',
  plugins: [react()]
})
npm i -D @vitejs/plugin-react
npm run build
git add package.json package-lock.json
git commit -m "Add @vitejs/plugin-react"
git push
