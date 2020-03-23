import filterComparers from '../constants/hotelFiltersComparer'

export const filterFunction = (filters) => {
  return (value) => {
    for (const filterKey of Object.keys(filters)) {
      if (!filters[filterKey] || filters[filterKey].length === 0) {
        continue
      }

      const valueMatches = filterComparers[filterKey]
      if (!valueMatches(value[filterKey], filters[filterKey])) {
        return false
      }
    }

    return true
  }
}
