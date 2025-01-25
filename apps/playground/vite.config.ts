import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { vitePlugin } from '../../scripts/plugins'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      Components({
        dts: false,
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // css in js
            prefix: '',
          }),
        ],
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          {
            '@bmos/i18n': ['t'],
          },
          {
            '@bmos/utils': [
              'sendMessage',
              'MessageType',
              'cloneDeep',
              'encrypt',
              'loopSelectableNotValueTree',
            ],
          },
        ],
        dts: false,
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        exclude: [/node_modules/, /\.git/, /packages/],
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        },
      }),
      vitePlugin(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    build: {
      minify: 'terser' as const,
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
