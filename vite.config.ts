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
      exclude: ["packages/**/*.test.ts"],
      outDir: "dist",
      insertTypesEntry: true,
      tsconfigPath: "tsconfig.packages.json",
    }),
  ],
  build: {
    lib: {
      entry: {
        components: "packages/components/index.ts",
        libs: "packages/libs/index.ts",
        stores: "packages/stores/index.ts",
      },
      formats: ["es"],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ["vue", "tailwindcss", "@ark-ui/vue", "pinia"],
    },
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["packages/**/*.test.ts"],
    reporters: ["dot"],
  },
})
