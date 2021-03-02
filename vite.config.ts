import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

const resolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

const baseURL = process.env.NODE_ENV === 'production' ? 'https://www.baidu.com/' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: baseURL,
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  build: {
    assetsDir: 'static',
    rollupOptions: {

    }
  }
})
