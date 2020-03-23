<template>
  <div class="flex flex-wrap">
    <template v-for="filterKey in Object.keys(hotelsResultsFilters)">
      <hotels-results-filter
        :key="filterKey"
        :prop="filterKey"
        :title="hotelsResultsFilters[filterKey].title"
        :options="hotelsResultsFilters[filterKey].options"
        @filterChanged="filterChangedHandler"
      />
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import hotelFilters from '../../constants/hotelFilters'

import HotelsResultsFilter from './HotelsResultsFilterComponents/HotelsResultsFilter'

export default {
  components: {
    HotelsResultsFilter
  },
  computed: {
    hotelsResultsFilters() {
      return hotelFilters
    }
  },
  methods: {
    ...mapActions({
      updateHotelsFilter: 'hotels/updateHotelsFilter'
    }),

    filterChangedHandler({ propToFilterBy, filterValues }) {
      this.updateHotelsFilter({
        propName: propToFilterBy,
        selectedValues: filterValues
      })
    }
  }
}
</script>
