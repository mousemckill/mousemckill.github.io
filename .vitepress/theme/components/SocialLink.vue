<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  icon: string;
  link: string;
  dataLink: string;
}>();
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <div class="text-xl shrink-0 print:hidden" :class="icon"></div>
    <a :href="link" target="_blank" :data-link="`(${dataLink || link})`"
      class="underline print:after:content-[attr(data-link)] print:no-underline" rel="noopener noreferrer">
      <span>
        <slot />
      </span>
    </a>
  </div>
</template>
