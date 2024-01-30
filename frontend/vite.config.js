import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     "/DefectData":{
  //       target:"http://localhost:3002",
  //       changeOrigin:true,
  //       // rewrite: (path) => path.replace(/^\/DefectData/, ''),

  //     }
  //   }
  // },
  plugins: [react()],
})
