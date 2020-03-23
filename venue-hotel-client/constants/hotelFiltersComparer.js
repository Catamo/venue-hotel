export default {
  amenities: (objectProp, filterValues) => {
    let matchedValues = 0

    // to avoid an O(nm) situation, a set it used
    const filtersSet = new Set(filterValues)

    for (const propValue of objectProp) {
      if (filtersSet.has(propValue)) {
        matchedValues++
      }
    }

    return matchedValues === filterValues.length
  },
  distance_to_venue: (objectProp, filterValues) => {
    for (const filterVal of filterValues) {
      if (objectProp <= filterVal) {
        return true
      }
    }

    return false
  },
  price_category: (objectProp, filterValues) => {
    return filterValues.includes(objectProp)
  },
  rating: (objectProp, filterValues) => {
    return filterValues.includes(objectProp)
  }
}
