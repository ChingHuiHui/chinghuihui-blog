/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './*.vue',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
