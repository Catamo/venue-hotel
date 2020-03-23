import { URL_ROOM_BY_ID_FORMAT } from '../endpoints'

export const state = () => ({
  selectedRoom: {}
})

export const mutations = {
  selectRoom(state, room) {
    state.selectedRoom = room
  }
}

export const actions = {
  async getRoomById({ commit }, roomId) {
    const room = await this.$axios.$get(
      URL_ROOM_BY_ID_FORMAT.replace(':id', roomId)
    )
    commit('selectRoom', room)
  },

  clearState({ commit }) {
    commit('selectRoom', {})
  }
}
