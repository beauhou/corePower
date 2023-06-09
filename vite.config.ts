import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 使用import导入解决错误
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    https: false,
    proxy: {
      '/api/': {
        target: 'http://localhost:1000/', // 接口的域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        rewrite: path => path.replace(/api/, '')
      }
    }
  }
})
