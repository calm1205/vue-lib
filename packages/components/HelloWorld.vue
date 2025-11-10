<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="text-3xl p-2xl font-bold">{{ msg }}</h1>
</template>
