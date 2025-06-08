<script setup lang="ts">
import { computed } from 'vue';
import { data, Experience } from '../experiences.data';

const { limit, ru } = defineProps<{
  ru?: boolean;
  limit?: number;
}>();

const dateFormatter = (rawDate?: string) => {
  if (!rawDate) {
    return ru ? 'настоящее время' : 'present';
  }

  const date = new Date(rawDate);
  date.setUTCHours(12);

  const lang = ru ? 'ru-RU' : 'en-US';

  return new Intl.DateTimeFormat(lang, {
    year: 'numeric',
    month: '2-digit',
  }).format(date);
};

const exp = computed(() => {
  if (!data || !data.length) {
    return [];
  }

  if (!!limit && limit > 0) {
    return data.slice(0, limit);
  }

  return data;
});

const getTasks = (item: Experience) => {
  return ru ? item.tasks_ru : item.tasks;
};
</script>

<template>
  <section v-for="item in exp" class="mb-6">
    <h3>{{ item.position }} &mdash; {{ item.org }}</h3>
    <div class="font-light text-sm">
      &#x1F4C5; {{ dateFormatter(item.dates.start) }} &mdash;
      {{ dateFormatter(item.dates.end) }}
    </div>
    <ul>
      <li v-for="task in getTasks(item)">
        {{ task }}
      </li>
    </ul>
  </section>
</template>
