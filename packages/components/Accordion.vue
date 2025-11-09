<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion"
import { ref } from "vue"

const items = ref(["React", "Solid", "Vue", "Svelte"])
</script>

<template>
  <Accordion.Root :defaultValue="['React']">
    <Accordion.Item v-for="item in items" :key="item" :value="item">
      <Accordion.ItemTrigger>
        What is {{ item }}?
        <Accordion.ItemIndicator> > </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent
        >{{ item }} is a JavaScript library for building user interfaces.</Accordion.ItemContent
      >
    </Accordion.Item>
  </Accordion.Root>
</template>
