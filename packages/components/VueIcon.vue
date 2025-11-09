<script setup lang="ts">
import vueLogo from "../assets/vue.svg"

const { width, height } = defineProps<{
  width?: string | number
  height?: string | number
}>()
</script>

<template>
  <img :src="vueLogo" alt="Vue logo" :width="width" :height="height" />
</template>
