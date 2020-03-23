export default ({ app }) => {
  app.router.afterEach((to, from) => {
    app.store.dispatch('hotels/clearState')
    app.store.dispatch('rooms/clearState')
    app.store.dispatch('bookings/clearState')

    if (to.path.includes('admin')) {
      app.store.dispatch('theme/activateDarkTheme', true)
    } else {
      app.store.dispatch('theme/activateDarkTheme', false)
    }
  })
}
