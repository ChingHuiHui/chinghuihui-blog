<template>
  <div class="flex justify-center">
    <div class="max-w-[1024px] w-full min-h-screen flex flex-col">
      <HuiHeader v-if="!isIndexPage" />
      <main class="flex-1 bg-slate-100 py-10 px-4">
        <slot />
      </main>
      <HuiFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
const isIndexPage = computed(() => useRoute().path === '/')
</script>
