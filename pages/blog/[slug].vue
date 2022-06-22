<template>
  <div>
    <div class="bg-white p-4 pb-2 mb-6 border-b-4">
      <h2 class="text-xl md:text-3xl font-bold">{{ data.title }}</h2>
      <div
        class="flex flex-col md:flex-row-reverse md:justify-between md:items-end"
      >
        <div class="space-x-2 mb-3 md:mb-0">
          <span
            class="category"
            :class="category.color"
            v-for="category in normalizedCategory"
            :key="category"
          >
            {{ category.label }}
          </span>
        </div>
        <time class="text-xs">{{ data.createdAt }}</time>
      </div>
    </div>
    <article class="prose max-w-none md:prose-lg">
      <ContentRenderer v-if="data" :value="data" />
    </article>
  </div>
</template>

<script setup lang="ts">
import { useCategory } from '~/composables/useCategory'

const {
  params: { slug },
} = useRoute()

const path = `/${slug}`

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

const { categoryDictionary } = useCategory()

const normalizedCategory = computed(() =>
  data.value.category.map((category) => categoryDictionary[category])
)
</script>
