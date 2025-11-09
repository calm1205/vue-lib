<script setup lang="ts">
import vueLogo from "../assets/vue.svg"

const { alt, width, height } = defineProps<{
  alt?: string
  width?: string | number
  height?: string | number
}>()
</script>

<template>
  <img :src="vueLogo" :alt="alt ?? 'Vue logo'" :width="width" :height="height" />
</template>
