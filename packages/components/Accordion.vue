<script setup lang="ts">
import { Accordion } from "@ark-ui/vue/accordion"
import { ref } from "vue"

const items = ref(["React", "Solid", "Vue", "Svelte"])
</script>

<template>
  <Accordion.Root :defaultValue="['React']" collapsible>
    <Accordion.Item
      v-for="item in items"
      :key="item"
      :value="item"
      class="p-2 border border-gray-300 rounded-md"
    >
      <Accordion.ItemTrigger class="flex items-center justify-between gap-2 w-full cursor-pointer">
        What is {{ item }}?
        <Accordion.ItemIndicator> ▼ </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent class="text-gray-500">
        {{ item }} is a JavaScript library for building user interfaces.
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>

<style scoped>
@keyframes slideDown {
  from {
    opacity: 0.01;
    height: 0;
  }
  to {
    opacity: 1;
    height: var(--height);
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    height: var(--height);
  }
  to {
    opacity: 0.01;
    height: 0;
  }
}

[data-scope="accordion"][data-part="item-content"][data-state="open"] {
  animation: slideDown 250ms ease-in-out;
}

[data-scope="accordion"][data-part="item-content"][data-state="closed"] {
  animation: slideUp 200ms ease-in-out;
}

/* Rotate indicator when open */
[data-scope="accordion"][data-part="item-indicator"] {
  display: inline-block;
  transition: transform 200ms ease-in-out;
}
[data-scope="accordion"][data-part="item-indicator"][data-state="open"] {
  transform: rotate(180deg);
}
</style>
