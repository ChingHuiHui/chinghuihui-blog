<template>
  <nav>
    <ul class="space-y-2">
      <li v-for="link in links" :key="link.to" class="list-item">
        <NuxtLink :to="link.to" class="inline-block space-x-4">
          <span class="font-bold md:text-lg">- {{ link.title }}</span>
          <span class="text-xs">{{ link.createdAt }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
// TODO: find the createdAt property in @nuxt/content
const articles = await queryContent().sort({ createdAt: -1 }).find()

const links = computed(() =>
  articles.map((article) => ({
    title: article.title,
    to: `/blog${article._path}`,
    createdAt: article.createdAt,
  }))
)
</script>

<style scoped>
.list-item {
  @apply relative flex items-center w-fit;

  &::after {
    content: '';

    @apply absolute top-full left-0 w-0 bg-slate-600 h-0.5;
    @apply transition-all duration-300;
  }

  &:hover::after {
    @apply w-full;
  }
}
</style>
