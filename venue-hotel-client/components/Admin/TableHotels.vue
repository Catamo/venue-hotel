<template>
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th class="px-4 py-2 text-left">Name</th>
        <th class="px-4 py-2 text-left">Distance to Venue (mts)</th>
        <th class="px-4 py-2 text-left">Rating</th>
        <th class="px-4 py-2 text-left">Price Category</th>
        <th class="px-4 py-2 text-left">Amenities</th>
        <th class="px-4 py-2 text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="hotel in hotelsList" :key="hotel.id">
        <td class="border px-4 py-2">{{ hotel.name }}</td>
        <td class="border px-4 py-2">{{ hotel.distance_to_venue }}</td>
        <td class="border px-4 py-2">{{ hotel.rating }}/5</td>
        <td class="border px-4 py-2">
          {{ getTitlePriceCategory(hotel.price_category) }}
        </td>
        <td class="border px-4 py-2">
          {{ getAmenitiesTitles(hotel.amenities) }}
        </td>
        <td class="border px-4 py-2">
          <button
            class="delete-button w-20 bg-transparent text-red-600 hover:bg-red-600 hover:text-white"
            @click="() => deleteClickHandler(hotel.id)"
          >
            Delete
          </button>
        </td>
      </tr>
      <tr v-if="!hotelsList || hotelsList.length === 0">
        <td class="border px-4 py-2 text-center" colspan="5">
          No hotel data available
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {
  AMENITIES_MAP,
  PRICE_CATEGORY_MAP
} from '../../constants/hotelPropertiesValuesTitles'

export default {
  props: {
    hotelsList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getTitlePriceCategory(priceCategory) {
      return PRICE_CATEGORY_MAP[priceCategory]
    },
    getAmenitiesTitles(amenities) {
      return amenities.map((val) => AMENITIES_MAP[val]).join(', ')
    },
    deleteClickHandler(hotelId) {
      this.$emit('deleteClicked', hotelId)
    }
  }
}
</script>

<style lang="postcss" scoped>
.delete-button {
  @apply border-red-600 justify-center p-2 flex border rounded;
}
</style>
