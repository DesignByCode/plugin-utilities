import {resolve} from "path"
import {defineConfig} from "vitest/config"
import dts from "vite-plugin-dts"

/** @type {import('vite').UserConfig} */
export default defineConfig({
  test: {
    coverage: {
      reporter: ["text"],
      lines: 60,
      branches: 60,
      functions: 60,
      statements: 60,
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "Tailwindcss Utils",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {},
  },
  plugins: [dts()],
})
