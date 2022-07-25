import { gql } from 'graphql-tag'

export const GET_USER = gql`
  query {
    user(login: "ChingHuiHui") {
      contributionsCollection {
        contributionCalendar {
          colors
          months {
            year
            name
            firstDay
            totalWeeks
          }
          weeks {
            contributionDays {
              color
              date
              weekday
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`
