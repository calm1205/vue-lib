import { defineConfig } from "vitest/config"
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
    },
    rollupOptions: {
      external: ["vue", "tailwindcss", "@ark-ui/vue"],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["packages/**/*.test.ts"],
    reporters: ["dot"],
  },
})
