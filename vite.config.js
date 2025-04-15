import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/munir-eventify/', // 👈 This is critical for GitHub Pages
})