import dayjs from 'dayjs'
import utcPlugin from 'dayjs/plugin/utc'
import timezonePlugin from 'dayjs/plugin/timezone'
import isSameOrBeforePlugin from 'dayjs/plugin/isSameOrBefore'
import weekOfYearPlugin from 'dayjs/plugin/weekOfYear'

export default defineNuxtPlugin(() => {
  dayjs.extend(utcPlugin)
  dayjs.extend(timezonePlugin)
  dayjs.extend(isSameOrBeforePlugin)
  dayjs.extend(weekOfYearPlugin)

  return {
    provide: { date: dayjs },
  }
})
