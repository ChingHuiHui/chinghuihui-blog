<template>
  <footer>
    <div class="px-4 py-2 flex justify-between bg-slate-500 text-white text-sm">
      <span class="mr-1 underline decoration-red-400">chinghuihui.</span>
      <div class="flex">
        <div v-for="(link, i) in mediaLinks" :key="link.title">
          <a class="link" :href="link.to" target="_blank">{{ link.title }}</a>
          <span v-if="i !== mediaLinks.length - 1">/</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const mediaLinks: { title: string; to: string }[] = [
  { title: 'github', to: 'https://github.com/ChingHuiHui' },
  { title: 'twitter', to: 'https://twitter.com/chinghuihui_126' },
  { title: 'email', to: 'mailto:sunny70624@gmail.com' },
]
</script>
