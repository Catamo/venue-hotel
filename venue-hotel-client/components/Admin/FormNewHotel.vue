<template>
  <form class="w-full">
    <div class="flex flex-wrap mb-6 px-3">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="form-label" for="hotel-name">
          Name
        </label>
        <input
          id="hotel-name"
          v-model="newHotel.name"
          class="focus:outline-none focus:bg-white"
          type="text"
          placeholder="New hotel name..."
        />
      </div>
      <div class="w-full px-3">
        <label class="form-label" for="hotel-description">
          Description
        </label>
        <textarea
          id="hotel-description"
          v-model="newHotel.description"
          class="focus:outline-none focus:bg-white"
          type="text"
          placeholder="New hotel description..."
        ></textarea>
      </div>
      <div class="w-1/2 px-3 mb-6 md:mb-0">
        <label class="form-label" for="hotel-distance">
          Distance to Venue
        </label>
        <input
          id="hotel-distance"
          v-model="newHotel.distance_to_venue"
          class="focus:outline-none focus:bg-white"
          type="number"
          min="1"
          placeholder="Distance to venue..."
        />
      </div>
      <div class="w-1/2 px-3 mb-6 md:mb-0">
        <label class="form-label" for="hotel-rating">
          Rating
        </label>
        <input
          id="hotel-rating"
          v-model="newHotel.rating"
          class="focus:outline-none focus:bg-white"
          type="number"
          min="1"
          max="5"
          step="1"
          placeholder="Rating of the hotel..."
        />
      </div>
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="form-label" for="hotel-price-category">
          Price Category
        </label>
        <div class="relative">
          <select
            id="hotel-price-category"
            v-model="newHotel.price_category"
            class="focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="form-label" for="hotel-amenities">
          Amenities
        </label>
        <div class="flex flex-row flex-wrap">
          <template v-for="(item, index) in amenitiesList">
            <label :key="'check' + index" class="w-1/3 block text-gray-600">
              <input
                v-model="checkedAmenities"
                :value="item"
                class="mr-2 leading-tight"
                type="checkbox"
              />
              <span class="text-md">
                {{ item.title }}
              </span>
            </label>
          </template>

          <div class="w-full text-center mt-6 flex justify-center">
            <button type="reset" class="home-button w-1/4 mr-2">
              Clear
            </button>
            <button
              type="button"
              class="confirm-button w-1/4 ml-2"
              @click="createClickHandler"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { AMENITIES_MAP } from '../../constants/hotelPropertiesValuesTitles'

const defaultHotelData = {
  name: '',
  description: '',
  distance_to_venue: 0,
  rating: 0,
  price_category: '',
  amenities: []
}

export default {
  data() {
    return {
      checkedAmenities: [],
      newHotel: Object.assign({}, defaultHotelData)
    }
  },
  computed: {
    amenitiesList() {
      return Object.keys(AMENITIES_MAP).map((key) => ({
        title: AMENITIES_MAP[key],
        value: key
      }))
    }
  },
  methods: {
    createClickHandler() {
      this.newHotel.amenities = this.checkedAmenities.map((a) => a.value)
      this.$emit('submit', this.newHotel)

      this.newHotel = Object.assign({}, defaultHotelData)
      this.checkedAmenities = []
    }
  }
}
</script>

<style lang="postcss" scoped>
.form-label {
  @apply block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2;
}

input[type='text'],
input[type='number'],
textarea {
  @apply appearance-none block w-full bg-gray-200 text-gray-700 border;
  @apply rounded py-3 px-4 mb-3 leading-tight w-full;
}

select {
  @apply block appearance-none w-full bg-gray-200 border border-gray-200;
  @apply text-gray-700 py-3 mb-3 px-4 pr-8 rounded leading-tight;
}

.confirm-button {
  @apply bg-gray-800 text-white p-2 font-bold border rounded;
}

.home-button {
  @apply bg-transparent text-gray-800 border-gray-800;
  @apply justify-center p-2 flex border rounded;
}
</style>
