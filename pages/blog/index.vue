<template>
  <div>
    <nav class="category-filter">
      <ul class="flex space-x-2">
        <li v-for="category in categoryDictionary">
          <span
            @click="toggleCategory(category.name)"
            class="category"
            :class="[
              category.color,
              { active: activeCategories.includes(category.name) },
            ]"
          >
            {{ category.label }}
          </span>
        </li>
      </ul>
    </nav>
    <nav>
      <ul class="space-y-2">
        <li
          v-for="article in filteredArticles"
          :key="article.to"
          class="list-item"
        >
          <NuxtLink :to="article.to" class="inline-block space-x-4 mb-1">
            <span class="font-bold md:text-lg">- {{ article.title }}</span>
            <span class="text-xs">{{ article.createdAt }}</span>
          </NuxtLink>
          <div class="space-x-2">
            <span
              class="category"
              :class="category.color"
              v-for="category in article.category"
              :key="`${article.title}-${category}`"
            >
              {{ category.label }}
            </span>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useCategory } from '~/composables/useCategory'

const { categoryDictionary, CATEGORY } = useCategory()

// TODO: find the createdAt property in @nuxt/content
const articles = await queryContent().sort({ createdAt: -1 }).find()

const filteredArticles = computed(() =>
  articles
    .map((article) => ({
      title: article.title,
      to: `/blog${article._path}`,
      createdAt: article.createdAt,
      category: article.category.map(
        (category) => categoryDictionary[category]
      ),
    }))
    .filter(({ category }) => {
      const categoryList = category.map(({ name }) => name)
      const filteredArray = categoryList.filter((value) =>
        activeCategories.value.includes(value)
      )

      return filteredArray.length > 0
    })
)

const activeCategories = ref(Object.values(CATEGORY))

function toggleCategory(selectedCategory) {
  if (activeCategories.value.includes(selectedCategory)) {
    activeCategories.value = activeCategories.value.filter(
      (category) => category !== selectedCategory
    )

    return
  }

  activeCategories.value = [...activeCategories.value, selectedCategory]
}
</script>

<style scoped>
.list-item {
  @apply flex flex-col w-fit;

  span {
    @apply relative z-20 transition-colors duration-300;
  }

  a {
    @apply relative bg-transparent;

    &::after {
      content: '';

      @apply absolute top-0 h-full -left-1 w-0 bg-slate-600;
      @apply transition-all duration-300 z-10;
    }

    &:hover {
      @apply text-white;

      &::after {
        width: calc(100% + 1rem);
      }
    }
  }
}

.category-filter {
  @apply pb-4 mb-5 border-b;

  .category {
    @apply bg-opacity-30 cursor-pointer;

    &.active {
      @apply bg-opacity-100;
    }
  }
}
</style>
