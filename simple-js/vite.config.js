import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    minify: false
  },
  server: {
    port: 3333
  },
  envPrefix: 'COOL_APP_'

})  