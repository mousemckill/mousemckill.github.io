<script setup lang="ts">
import { useData } from 'vitepress';
import { Theme } from '../../config';

const { site } = useData<Theme>();
</script>

<template>
  <section class="mt-2 lg:mt-8 flex lg:flex-col gap-x-2 flex-wrap w-full">
    <SocialLink :link="`mailto:${site.themeConfig.socialLinks.email}`" :data-link="site.themeConfig.socialLinks.email"
      icon="i-mdi-email">
      Email
    </SocialLink>
    <SocialLink :link="site.themeConfig.socialLinks.github" icon="i-mdi-github">
      Github
    </SocialLink>
    <SocialLink :link="site.themeConfig.socialLinks.linkedin" icon="i-mdi-linkedin">
      LinkedIn
    </SocialLink>
    <SocialLink :link="site.themeConfig.socialLinks.telegram" icon="i-mdi-telegram">
      Telegram
    </SocialLink>
  </section>
</template>
