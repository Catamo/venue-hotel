<template>
  <div>
    <div class="flex mt-12 px-3">
      <div class="px-3 w-3/12 lg:block hidden">
        <div class="w-full">
          <div
            class="border border-gray-400 rounded-lg flex flex-col justify-between leading-normal bg-white"
          >
            <div>
              <h3 class="text-xl py-4 px-6 flex items-center">
                Create new Hotel
              </h3>
              <form-new-hotel @submit="submitHandler" />
            </div>
          </div>
        </div>
      </div>
      <div class="px-3 w-9/12">
        <div class="bg-white rounded-lg border-gray-400 border">
          <h3 class="text-xl py-4 px-6 flex items-center">
            Hotel List
          </h3>
          <hr class="border-gray-400" />
          <div class="pb-2">
            <table-hotels
              :hotels-list="hotelsList"
              @deleteClicked="deleteClickedHandler"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FormNewHotel from '../../components/Admin/FormNewHotel'
import TableHotels from '../../components/Admin/TableHotels'

export default {
  components: {
    FormNewHotel,
    TableHotels
  },
  async fetch() {
    await this.$store.dispatch('hotels/getHotelsList')
  },
  fetchOnServer: false,
  computed: {
    ...mapState({
      hotelsList: (state) => state.hotels.hotelsList
    })
  },
  methods: {
    submitHandler(hotel) {
      this.$store.dispatch('hotels/postNewHotel', hotel)
    },

    deleteClickedHandler(hotelId) {
      this.$store.dispatch('hotels/deleteUpdateHotel', hotelId)
    }
  }
}
</script>
