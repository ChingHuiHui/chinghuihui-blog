import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  app: {
    head: {
      title: 'Chinghuihui-Blog',
      meta: [{ name: 'description', content: "chinghuihui's blog" }],
    },
  },
})
