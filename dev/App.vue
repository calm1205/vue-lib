<script setup lang="ts">
import { HelloWorld } from "@calm1205/vue-lib"
import { Accordion as ImportedAccordion } from "@calm1205/vue-lib"
import Accordion from "../packages/components/Accordion.vue"
import { add } from "@calm1205/vue-lib"

console.log(add(1, 2))
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <!-- <ImportedAccordion /> -->
  <Accordion />
</template>
