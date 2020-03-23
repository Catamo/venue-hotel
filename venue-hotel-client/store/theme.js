export const state = () => ({
  darkThemeIsActive: false
})

export const mutations = {
  activateDarkTheme(state, isActive) {
    state.darkThemeIsActive = isActive
  }
}

export const actions = {
  activateDarkTheme({ commit }, isActive) {
    commit('activateDarkTheme', isActive)
  }
}
