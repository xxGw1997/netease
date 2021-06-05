import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = dir => path.join(__dirname, dir)


// https://vitejs.dev/config/
export default defineConfig({
  css: {},
  esbuild: {},
  resolve: {
    alias:{
      '@':resolve("src"),
      'comps':resolve("src/components"),
      'api':resolve("src/api"),
      'views':resolve("src/views"),
      'styles':resolve("src/styles")
    }
  },
  plugins: [vue()]
})