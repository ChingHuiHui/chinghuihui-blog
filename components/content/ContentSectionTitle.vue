<template>
  <h3 class="border-b-4 border-slate-600 w-fit">
    {{ title }}
  </h3>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>()
</script>
