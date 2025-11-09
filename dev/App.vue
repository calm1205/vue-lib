<script setup lang="ts">
import { HelloWorld } from "../packages/index.ts"
import { Accordion as ImportedAccordion } from "../packages/index.ts"
import { VueIcon } from "../packages/index.ts"
import { add } from "../packages/index.ts"

console.log(add(1, 2))
</script>

<template>
  <main class="p-4">
    <div class="flex items-center gap-4">
      <VueIcon />
      <HelloWorld msg="Vite + Vue" />
    </div>
    <ImportedAccordion />
  </main>
</template>
