import { v4 as uuidv4 } from 'uuid'
import { URL_HOTELS, URL_HOTEL_BY_ID_FORMAT } from '../endpoints'

export const state = () => ({
  hotelsList: [],
  hotelsListFilters: {},
  selectedHotel: {}
})

export const mutations = {
  setHotelsList(state, list) {
    state.hotelsList = list
  },

  selectHotel(state, hotel) {
    state.selectedHotel = hotel
  },

  setHotelsListFilters(state, filters) {
    state.hotelsListFilters = filters
  }
}

export const actions = {
  async getHotelsList({ commit }) {
    const hotels = await this.$axios.$get(URL_HOTELS)
    commit('setHotelsList', hotels)
  },

  async getHotelById({ commit }, hotelId) {
    const hotel = await this.$axios.$get(
      URL_HOTEL_BY_ID_FORMAT.replace(':id', hotelId)
    )
    commit('selectHotel', hotel)
  },

  async postNewHotel({ commit, state }, hotel) {
    hotel.id = uuidv4()
    await this.$axios.$post(URL_HOTELS, hotel)
    commit('setHotelsList', [...state.hotelsList, hotel])
  },

  async deleteUpdateHotel({ commit, state }, hotelId) {
    await this.$axios.$delete(
      URL_HOTEL_BY_ID_FORMAT.replace(':id', hotelId).split('?')[0]
    )
    commit(
      'setHotelsList',
      state.hotelsList.filter((val) => {
        if (hotelId === val.id) {
          return false
        }
        return true
      })
    )
  },

  updateHotelsFilter({ commit, state }, { propName, selectedValues }) {
    const updatedFilters = {
      ...state.hotelsListFilters,
      [propName]: selectedValues
    }
    commit('setHotelsListFilters', updatedFilters)
  },

  clearState({ commit }) {
    commit('setHotelsList', [])
    commit('selectHotel', {})
    commit('setHotelsListFilters', {})
  }
}
