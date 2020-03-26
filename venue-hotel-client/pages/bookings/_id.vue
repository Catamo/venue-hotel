<template>
  <div>
    <keep-alive>
      <div
        class="max-w-screen-lg m-auto bg-white rounded-lg border border-gray-400"
      >
        <div class="w-full py-4 px-6 text-justify">
          <h1 class="text-3xl">Bookings Details</h1>
          <hotel-result :hotel="selectedHotel" />
        </div>
        <hr class="my-4" />
        <div class="w-full px-6 py-4 flex flex-wrap">
          <div class="w-1/5">
            <label class="text-sm text-gray-600">First Name</label>
            <p class="text-lg font-bold">Michael</p>
          </div>
          <div class="w-1/5">
            <label class="text-sm text-gray-600">Last Name</label>
            <p class="text-lg font-bold">Hampton</p>
          </div>
          <div class="w-3/5">
            <label class="text-sm text-gray-600">Booking #</label>
            <p class="text-lg font-bold">{{ activeBooking.bookingNumber }}</p>
          </div>
        </div>
        <hr class="my-4" />
        <span class="text-sm mx-6 text-gray-600">Room</span>
        <room-option :room="selectedRoom" class="p-6 pt-4">
          <div class="w-full text-center mt-2 flex justify-center">
            <router-link to="/" class="home-button w-1/4 mr-2">
              Go to Main Page
            </router-link>
            <button
              class="confirm-button w-1/4 ml-2"
              :class="{ disabled: bookingConfirmed }"
              @click="confirmClickHandler"
            >
              {{ bookingConfirmed ? 'Confirmed!' : 'Confirm' }}
            </button>
          </div>
        </room-option>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RoomOption from '../../components/Rooms/RoomOptionComponent'
import HotelResult from '../../components/Hotels/HotelResultComponent/Horizontal'

export default {
  name: 'BookingConfirmation',
  components: {
    RoomOption,
    HotelResult
  },
  props: {
    rooms: {
      type: Array,
      default: () => []
    }
  },
  async fetch() {
    await this.$store.dispatch('bookings/getBookingById', this.$route.params.id)
    await this.$store.dispatch('rooms/getRoomById', this.activeBooking.roomId)
    await this.$store.dispatch('hotels/getHotelById', this.selectedRoom.hotelId)
  },
  fetchOnServer: false,
  computed: {
    ...mapState({
      activeBooking: (state) => state.bookings.activeBooking,
      selectedHotel: (state) => state.hotels.selectedHotel,
      selectedRoom: (state) => state.rooms.selectedRoom
    }),

    bookingConfirmed() {
      return this.activeBooking && this.activeBooking.confirmed
    }
  },
  methods: {
    confirmClickHandler() {
      if (this.bookingConfirmed) return

      this.$store.dispatch('bookings/putEditBooking', {
        ...this.activeBooking,
        confirmed: true
      })
    },
    objectIsEmpty(obj) {
      return Object.keys(obj).length === 0 && obj.constructor === Object
    }
  }
}
</script>

<style lang="postcss" scoped>
.confirm-button {
  @apply bg-gray-800 text-white p-2 font-bold border rounded;
}

.confirm-button.disabled {
  @apply opacity-50 cursor-not-allowed;
}

.home-button {
  @apply bg-transparent text-gray-800 border-gray-800;
  @apply justify-center p-2 flex border rounded;
}
</style>
