import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/stats2': {
        target: 'https://in.global.nba.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/stats2/, '/stats2'),
      },
    },
  },
})
