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
    <div>
      <svg>
        <g v-for="(date, i) in dates" :key="i">
          <rect
            class="cal-day"
            :style="{
              fill: getColor(date),
            }"
            :width="10"
            :height="10"
            :x="$date(date).week() * (10 + 1)"
            :y="$date(date).day() * (10 + 1)"
            rx="2"
            ry="2"
          />
        </g>
      </svg>
    </div>

    <div class="md:flex md:items-center md:flex-1">
      <div class="entry-cards">
        <NuxtLink to="/about" class="entry-card">ABOUT</NuxtLink>
        <NuxtLink to="/blog" class="entry-card">BLOG</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable'
import { GET_USER } from '@/api/test'

import _ from 'lodash'

const { loading, result } = useQuery(GET_USER)

const datesInfo = computed(() => {
  return (
    result.value &&
    _.keyBy(
      _.flatMap(
        result.value.user.contributionsCollection.contributionCalendar.weeks,
        'contributionDays'
      ),
      'date'
    )
  )
})

function getColor(date: Date): string {
  const dateInfo =
    datesInfo.value[useNuxtApp().$date(date).format('YYYY-MM-DD')]

  return dateInfo?.color || '#ebedf0'
}

const dates = computed(() => {
  let iterator = useNuxtApp().$date().startOf('year')
  const endOfYear = useNuxtApp().$date().endOf('year')

  const dates = []

  while (iterator.isSameOrBefore(endOfYear)) {
    dates.push(iterator)

    iterator = iterator.add(1, 'days')
  }

  return dates.map((date) => date.format('YYYY-MM-DD'))
})
</script>

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
