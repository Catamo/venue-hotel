import { v4 as uuidv4 } from 'uuid'

import { URL_BOOKINGS, URL_BOOKING_BY_ID_FORMAT } from '../endpoints'

export const state = () => ({
  activeBooking: {}
})

export const mutations = {
  setActiveBooking(state, booking) {
    state.activeBooking = booking
  }
}

export const actions = {
  async getBookingById({ commit }, bookingId) {
    const booking = await this.$axios.$get(
      URL_BOOKING_BY_ID_FORMAT.replace(':id', bookingId)
    )
    commit('setActiveBooking', booking)
  },

  async postNewBooking({ commit, state }, roomId) {
    const booking = {
      id: uuidv4(),
      bookingNumber: new Date().valueOf(),
      roomId,
      confirmed: false
    }

    await this.$axios.$post(URL_BOOKINGS, booking)
    commit('setActiveBooking', booking)
  },

  async putEditBooking({ commit }, booking) {
    await this.$axios.$put(
      URL_BOOKING_BY_ID_FORMAT.replace(':id', booking.id),
      booking
    )
    commit('setActiveBooking', booking)
  },

  clearState({ commit }) {
    commit('setActiveBooking', {})
  }
}
