---
home: true
title: Maksim Severukhin
---

<script setup>
import { useData } from 'vitepress'

const { site } = useData()
</script>

# Hi there 👋 {{ site.title }}{.lg:hidden}

<Contacts class="lg:hidden" />

I’m a Senior Frontend Developer with over 12 years of experience in software development and 7+ years in frontend engineering. I specialize in React, Vue, and Node.js. I build scalable, performant web apps, lead teams, conduct interviews, and create reusable UI libraries.

## Past Experience

<Experience :limit="2" />

## Education

<Education />

## Skills

<Skills />
