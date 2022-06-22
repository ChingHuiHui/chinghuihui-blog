export const useCategory = () => {
  enum CATEGORY {
    DAILY = 'Daily',
    JAVASCRIPT = 'JavaScript',
    '100_DAYS_OF_CODE' = '100DaysOfCode',
  }

  const CATEGORY_COLOR = {
    [CATEGORY.DAILY]: 'bg-orange-700',
    [CATEGORY.JAVASCRIPT]: 'bg-amber-400',
    [CATEGORY['100_DAYS_OF_CODE']]: 'bg-green-700',
  }

  const categoryDictionary: {
    [key: string]: { name: string; label: string; color: string }
  } = Object.entries(CATEGORY).reduce(
    (carry, [key, category]) => ({
      ...carry,
      [key]: {
        name: category,
        label: `#${category}`,
        color: CATEGORY_COLOR[category],
      },
    }),
    {}
  )

  return { CATEGORY, CATEGORY_COLOR, categoryDictionary }
}
