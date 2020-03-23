<template>
  <div>
    <template v-for="room in rooms">
      <room-option :key="room.id" :room="room">
        <button
          class="bg-gray-800 text-white font-bold p-2 border rounded text-center"
          @click="() => bookNowClickHandler(room.id)"
        >
          Book Now
        </button>
        <hr class="my-4" />
      </room-option>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RoomOption from './RoomOptionComponent'

export default {
  components: {
    RoomOption
  },
  props: {
    rooms: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      activeBooking: (state) => state.bookings.activeBooking
    })
  },
  methods: {
    ...mapActions({ postNewBooking: 'bookings/postNewBooking' }),

    async bookNowClickHandler(roomId) {
      await this.postNewBooking(roomId)
      this.$router.push({ path: '/bookings/' + this.activeBooking.id })
    }
  }
}
</script>
