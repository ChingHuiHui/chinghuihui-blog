<template>
  <ul class="not-prose">
    <li v-for="link in links" class="flex items-center space-x-5">
      <span class="font-semibold"> {{ link.title }} =></span>
      <a target="_blank" :href="link.to">
        <img :src="link.icon" class="w-5" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import github from '~/assets/image/icon/github.svg'
import web from '~/assets/image/icon/web.svg'

const props = defineProps<{ repo: string; demo: string }>()

const links = computed(() => [
  {
    title: 'REPO',
    to: props.repo,
    icon: github,
  },
  {
    title: 'DEMO',
    to: props.demo,
    icon: web,
  },
])
</script>
