<script setup lang="ts">
import { useData } from 'vitepress';
import { Theme } from '../config';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData<Theme>();
</script>

<template>
  <div
    v-if="frontmatter.home"
    class="relative grid w-full auto-cols-[max-content_auto] font-sans"
  >
    <div class="col-start-2 row-start-1 min-w-0 p-4">
      <div class="flex flex-col lg:flex-row justify-center">
        <div
          class="prose print:text-sm prose-gray dark:prose-invert mx-auto max-w-[80ch]"
        >
          <Content />
        </div>
      </div>
      <div class="absolute top-0 right-0 p-4 text-center print:hidden">
        <a href="/">en</a> | <a href="/ru/">ru</a>
      </div>
    </div>
    <div
      class="hidden lg:block sticky h-dvh overflow-hidden z-1 col-start-1 row-start-1 w-auto overscroll-auto top-0"
    >
      <div class="px-4 py-8 w-80 bg-[--color-base-200] h-full">
        <div class="flex items-center flex-col mb-4">
          <img
            :src="site.themeConfig.avatar"
            alt="Logo"
            class="size-24 rounded-full mb-4"
          />
          <h1 class="text-2xl font-bold lg:text-center">{{ site.title }}</h1>
          <Contacts />
        </div>
      </div>
    </div>
  </div>
</template>
