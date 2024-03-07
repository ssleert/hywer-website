import { defineConfig } from 'vite'
import mdx from "@mdx-js/rollup"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({ jsxImportSource: "hywer" }) },
  ],
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "hywer",
  },
})
