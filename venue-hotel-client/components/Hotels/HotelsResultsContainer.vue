<template>
  <div class="flex -mx-3 flex-wrap p-4">
    <template v-for="hotel in data">
      <hotel-result-item :key="hotel.id" :hotel="hotel" />
    </template>
    <template v-if="noData">
      <div class="w-full px-3 h-40 flex items-center">
        <h1 class="text-4xl text-center w-full">
          Hotels data not available :(
        </h1>
      </div>
    </template>
    <template v-else-if="noResults">
      <div class="w-full px-3 h-40 flex items-center">
        <h1 class="text-4xl text-center w-full">
          No results for the selected filters
        </h1>
      </div>
    </template>
  </div>
</template>

<script>
import HotelResultItem from '../Hotels/HotelResultComponent/Vertical'

export default {
  components: {
    HotelResultItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    noData: {
      type: Boolean,
      default: false
    },
    noResults: {
      type: Boolean,
      default: false
    }
  }
}
</script>
