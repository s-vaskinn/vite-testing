import { defineConfig } from 'vite'
import { resolve } from 'path'
import removeConsole from 'vite-plugin-remove-console'  


export default defineConfig({
  plugins: [removeConsole()],
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin/index.html')
      }
    }
  },
  server: {
    port: 3333
  },
  envPrefix: 'COOL_APP_'

})  