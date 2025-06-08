<script setup lang="ts">
import { defineProps } from 'vue';
import { data } from '../education.data';

defineProps<{
  ru?: boolean;
}>();
</script>

<template>
  <section v-for="data in data" class="mb-2">
    <h3 class="mb-0">{{ ru ? data.title_ru : data.title }}</h3>
    <p>{{ ru ? data.degree_ru : data.degree }}, {{ data.date }}</p>
  </section>
</template>
