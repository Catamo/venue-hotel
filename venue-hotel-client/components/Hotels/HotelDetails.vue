<template>
  <div class="details mt-1 flex flex-row w-full">
    <span class="text-lg text-gray-600">
      Rating: <span class="text-black">{{ hotel.rating }}/5</span>
    </span>
    <span class="text-lg text-gray-600">
      Price Category: <span class="text-black">{{ priceCategory }}</span>
    </span>
    <span class="text-lg text-gray-600">
      Distance to Venue:
      <span class="text-black">{{ hotel.distance_to_venue }} mts</span>
    </span>
    <span class="text-lg text-gray-600">
      Amenities:
      <span class="text-black">{{ amenities }}</span>
    </span>
  </div>
</template>

<script>
import {
  AMENITIES_MAP,
  PRICE_CATEGORY_MAP
} from '../../constants/hotelPropertiesValuesTitles'

export default {
  props: {
    hotel: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    priceCategory() {
      return this.hotel && PRICE_CATEGORY_MAP[this.hotel.price_category]
    },
    amenities() {
      return (
        this.hotel &&
        this.hotel.amenities &&
        this.hotel.amenities.map((value) => AMENITIES_MAP[value]).join(', ')
      )
    }
  }
}
</script>

<style lang="postcss" scoped>
.details > span {
  @apply mr-6;
}
</style>
