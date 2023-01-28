/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueJsx from '@vitejs/plugin-vue-jsx'
import viteDts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    VueJsx(),
    viteDts({
      insertTypesEntry: true,
      staticImport: true,
      skipDiagnostics: true
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.ts'),
      name: 'hare-ui',
      fileName: format => `hare-ui.${format}.js`
    },
    outDir: path.resolve(__dirname, '../../lib'),
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
