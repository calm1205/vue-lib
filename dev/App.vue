<script setup lang="ts">
import { HelloWorld } from "@calm1205/vue-lib"
import { Accordion as ImportedAccordion } from "@calm1205/vue-lib"
import { VueIcon } from "@calm1205/vue-lib"
import { add } from "@calm1205/vue-lib"

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
