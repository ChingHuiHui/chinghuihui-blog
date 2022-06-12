<template>
  <main class="flex flex-col h-full">
    <div class="flex items-center mb-20 space-x-2">
      <h1 class="text-4xl md:text-6xl font-bold">
        Ching<span class="underline decoration-red-600 underline-offset-4"
          >huihui
        </span>
      </h1>
      <img
        class="w-12 h-12 md:w-20 md:h-20 rounded-full"
        src="~/assets/image/hui.jpeg"
      />
    </div>
    <div class="md:flex md:items-center md:flex-1">
      <div class="entry-cards">
        <NuxtLink to="/about" class="entry-card"> ABOUT HUI</NuxtLink>
        <NuxtLink to="/blog" class="entry-card">HUI BLOG</NuxtLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.entry-cards {
  @apply w-full space-y-2 md:flex md:space-x-2 md:space-y-0;

  &:hover {
    .entry-card:hover {
      @apply flex-[1.5];
    }

    .entry-card:not(:hover) {
      @apply bg-opacity-60 text-gray-300;
    }
  }

  .entry-card {
    @apply block flex-1 rounded-lg bg-white text-center text-2xl py-10 md:text-5xl md:py-20;
    @apply transition-all duration-300 cursor-pointer;
  }
}
</style>
