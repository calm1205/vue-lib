import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      include: ["packages"],
      outDir: "dist",
      insertTypesEntry: true,
      tsconfigPath: "tsconfig.packages.json",
    }),
  ],
  build: {
    lib: {
      entry: "packages/index.ts",
      formats: ["es"],
      fileName: () => `index.js`,
    },
    rollupOptions: {
      external: ["vue", "tailwindcss", "@ark-ui/vue"],
    },
  },
})
