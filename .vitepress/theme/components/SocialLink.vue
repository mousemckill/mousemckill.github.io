<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  icon: string;
  link: string;
}>();
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <div class="text-xl shrink-0 print:hidden" :class="icon"></div>
    <a
      :href="link"
      target="_blank"
      class="underline print:after:content-[attr(href)]"
      rel="noopener noreferrer"
    >
      <span class="print:hidden">
        <slot />
      </span>
    </a>
  </div>
</template>
