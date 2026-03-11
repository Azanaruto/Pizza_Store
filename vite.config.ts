import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
 css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/_var.scss" as *;
          @use "@/assets/scss/_mixins.scss" as *;
        `
      }
    }
  }
})