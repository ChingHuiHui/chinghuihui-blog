<template>
  <div>
    <div class="bg-white p-4 pb-2 mb-6 border-b-4">
      <h2 class="text-xl md:text-3xl font-bold">{{ data.title }}</h2>
      <time class="text-xs">{{ data.createdAt }}</time>
    </div>
    <article class="prose max-w-none md:prose-lg">
      <ContentRenderer v-if="data" :value="data" />
    </article>
  </div>
</template>

<script setup lang="ts">
const {
  params: { slug },
} = useRoute()

const path = `/${slug}`

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>
