<template>
  <nav>
    <ul class="space-y-2">
      <li v-for="link in links" :key="link.to" class="list-item">
        <NuxtLink :to="link.to" class="font-bold md:text-lg">
          - {{ link.title }}
        </NuxtLink>
        <span class="text-xs">{{ link.createdAt }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const articles = await queryContent().find()

// TODO: sort the posts
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
  @apply relative flex items-center space-x-4 w-fit;

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
