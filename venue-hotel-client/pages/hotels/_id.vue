<template>
  <div>
    <div class="flex p-6">
      <div class="w-3/4 pr-4">
        <div class="mt-1">
          <router-link to="/" class="home-button w-40 mr-2">
            Go to Main Page
          </router-link>
        </div>
        <hr class="my-4" />
        <h2 class="text-xl w-full pl-2">Gallery</h2>
        <hotel-images-gallery :hotel="selectedHotel" />
        <div class="w-full p-2 text-justify">
          <h1 class="text-3xl">{{ selectedHotel.name }}</h1>
          <hotel-details :hotel="selectedHotel" />
          <hr class="my-4" />
          <h2 class="text-xl mb-2">Description</h2>
          <p>{{ selectedHotel.description }}</p>
        </div>
      </div>
      <div class="w-1/4">
        <div
          class="w-full py-4 px-6 bg-white rounded-lg border border-gray-400"
        >
          <h2 class="text-xl">Available Rooms</h2>
          <hr class="my-4 -mx-6" />
          <room-options :rooms="availableRooms" />
          <button
            v-if="selectedHotel.rooms && selectedHotel.rooms.length > 2"
            class="bg-transparent w-full text-gray-800 border-gray-800 font-bold p-2 border rounded"
            @click="showAllRooms = !showAllRooms"
          >
            {{ showAllRooms ? 'See less' : 'See more' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RoomOptions from '../../components/Rooms/RoomOptionsContainer'
import HotelImagesGallery from '../../components/Hotels/HotelImagesGallery'
import HotelDetails from '../../components/Hotels/HotelDetails'

export default {
  components: {
    RoomOptions,
    HotelImagesGallery,
    HotelDetails
  },
  data() {
    return {
      showAllRooms: false
    }
  },
  computed: {
    ...mapState({
      selectedHotel: (state) => state.hotels.selectedHotel
    }),
    availableRooms() {
      let returnList = []
      if (this.selectedHotel && this.selectedHotel.rooms) {
        returnList = this.selectedHotel.rooms.concat()
        returnList.sort((a, b) => a.price_in_usd - b.price_in_usd)

        if (!this.showAllRooms) {
          returnList = returnList.slice(0, 2)
        }
      }

      return returnList
    }
  },
  created() {
    this.getHotelById(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      getHotelById: 'hotels/getHotelById'
    })
  }
}
</script>

<style lang="postcss" scoped>
.home-button {
  @apply bg-transparent text-gray-800 border-gray-800;
  @apply justify-center p-2 flex border rounded;
}
</style>
