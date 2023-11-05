import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target: 'https://3000-mdfirojahme-nodereactne-3wylkzcf7l5.ws-us105.gitpod.io/',
        changeOrigin: true,
        secure: true,      
        ws: true,
    }
    }
    
  },
  plugins: [react()],
})
