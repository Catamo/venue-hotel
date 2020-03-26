<template>
  <div class="mt-4 flex flex-row">
    <div
      class="bg-gray-400 h-64 rounded-md w-1/3 relative bg-center"
      :style="getHotelPhotoAsStyle(hotel)"
    >
      <h4 class="rating">
        <span>
          {{ hotel.rating }}
        </span>
        /5
      </h4>
    </div>
    <div class="px-1 w-2/3 pl-4">
      <span class="text-sm text-gray-600">Hotel</span>
      <h1 class="text-2xl text-black mt-3">
        {{ hotel.name }}
      </h1>
      <p class="text-sm">
        {{ getTruncatedDescription(hotel.description) }}
      </p>
      <h2 class="text-lg flex justify-between mt-2">
        <small class="text-gray-800">Price range:</small>
        <span class="text-teal-400">
          {{ getPriceRangeSign(hotel.price_category) }}
        </span>
      </h2>
    </div>
  </div>
</template>

<script>
import {
  PRICE_LOW,
  PRICE_MEDIUM,
  PRICE_HIGH
} from '../../../constants/priceCategories'

export default {
  props: {
    hotel: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getTruncatedDescription(strDescription) {
      if (!strDescription) return ''

      return strDescription.substring(0, 250) + '...'
    },
    getHotelPhotoAsStyle(hotel) {
      if (!hotel || !hotel.images) return ''

      return `background-image:url(${process.env.imagesServerUrl}/${hotel.images[0]});`
    },
    getPriceRangeSign(priceCategory) {
      switch (priceCategory) {
        case PRICE_LOW:
          return '$'
        case PRICE_MEDIUM:
          return '$$'
        case PRICE_HIGH:
          return '$$$'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.hover\:opacity-1:hover {
  opacity: 1 !important;
}

.backdrop {
  @apply w-full h-full opacity-0 flex items-center px-4;
  background-color: #ffffffdd;
}

.rating {
  @apply h-12 w-12 text-lg text-center rounded-lg absolute;
  @apply flex items-center justify-center text-gray-600;
  top: 1rem;
  right: 1rem;
  background-color: #ffffffdd;
}

.rating span {
  @apply text-teal-400;
}

.details-button {
  @apply bg-gray-800 text-white font-bold p-2;
  @apply w-full border rounded text-center;
}
</style>
