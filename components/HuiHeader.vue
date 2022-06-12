<template>
  <header
    class="flex items-end bg-slate-500 text-white flexx justify-between px-4 py-2"
  >
    <h1 class="text-xl"><NuxtLink to="/">Chinghuihui</NuxtLink></h1>
    <ul class="links">
      <li><NuxtLink to="/about" class="link">About</NuxtLink></li>
      <li><NuxtLink to="/blog" class="link">Blog</NuxtLink></li>
    </ul>
  </header>
</template>

<style scoped>
.links {
  @apply flex divide-x-2;

  li {
    @apply block px-2;

    .router-link-exact-active {
      @apply text-red-300;
    }
  }
}
</style>
