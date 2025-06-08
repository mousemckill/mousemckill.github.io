<script setup lang="ts">
import { data } from '../skills.data';

defineProps<{
  ru?: boolean;
}>();

const flatSkills = data.flatMap(skill => skill.items);
</script>

<template>
  <div>
    {{ flatSkills.join(', ') }}
  </div>
</template>
