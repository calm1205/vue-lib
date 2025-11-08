<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import { add } from "@calm1205/vue-lib"

console.log(add(1, 2))
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <HelloWorld2 msg="Vite + Vue" />
</template>
