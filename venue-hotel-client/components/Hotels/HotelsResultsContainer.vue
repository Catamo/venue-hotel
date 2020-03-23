<template>
  <div class="flex -mx-3 flex-wrap p-4">
    <template v-for="hotel in filteredHotelsList">
      <hotel-result-item :key="hotel.id" :hotel="hotel" />
    </template>
    <div v-if="noData" class="w-full px-3 h-40 flex items-center">
      <h1 class="text-4xl text-center w-full">Hotels data not available :(</h1>
    </div>
    <div v-if="!noData && noResults" class="w-full px-3 h-40 flex items-center">
      <h1 class="text-4xl text-center w-full">
        No results for the selected filters
      </h1>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { filterFunction } from '../../utils/filterUtils'

import HotelResultItem from '../Hotels/HotelResultComponent/Vertical'

export default {
  components: {
    HotelResultItem
  },
  computed: {
    ...mapState({
      hotelsList: (state) => state.hotels.hotelsList,
      hotelsListFilters: (state) => state.hotels.hotelsListFilters
    }),

    noData() {
      return !this.hotelsList || this.hotelsList.length <= 0
    },

    noResults() {
      return !this.filteredHotelsList || this.filteredHotelsList.length <= 0
    },

    filteredHotelsList() {
      if (Array.isArray(this.hotelsList)) {
        return this.hotelsList.filter(filterFunction(this.hotelsListFilters))
      }
      return []
    }
  },
  created() {
    this.getHotelsList()
  },
  methods: {
    ...mapActions({
      getHotelsList: 'hotels/getHotelsList'
    })
  }
}
</script>
