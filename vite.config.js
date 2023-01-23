import { defineConfig } from 'vite'
export default defineConfig({
  base: './',
  build: {
    minify: 'es2021',
  },
  publicDir: 'assets',
})
