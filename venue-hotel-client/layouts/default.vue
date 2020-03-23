<template>
  <div
    class="pb-6 min-h-screen"
    :class="{ dark: darkThemeIsActive, light: !darkThemeIsActive }"
  >
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Navbar from '../components/Layout/Navbar'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState({
      darkThemeIsActive: (state) => state.theme.darkThemeIsActive
    })
  }
}
</script>

<style lang="postcss">
.dark {
  @apply bg-gray-800;
}

.dark nav a span {
  @apply text-white;
}

.light {
  @apply bg-gray-200;
}

.light nav a span {
  @apply text-black;
}
</style>
