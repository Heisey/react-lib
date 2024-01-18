import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
    tsconfigPaths()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib.ts'),
      name: 'lib',
      fileName: (args) => `index.${args}.js`
    },
    rollupOptions: {
      external: [
        '**/*.stories.ts',
        '**/*.mdx'
      ]
    },
    sourcemap: true,
    emptyOutDir: true
  }
})
