<template>
  <div v-if="hotel" class="w-full">
    <div class="flex flex-row">
      <div class="w-4/6 p-2">
        <div
          class="h-128 w-full bg-gray-400 rounded-l-lg bg-center"
          :style="getNthImage(1)"
        ></div>
      </div>
      <div class="w-2/6">
        <div class="h-1/3 p-2">
          <div
            class="w-full h-full bg-gray-400 rounded-tr-lg bg-center"
            :style="getNthImage(2)"
          ></div>
        </div>
        <div class="h-1/3 p-2 flex flex-row">
          <div
            class="w-1/2 h-full mr-2 bg-gray-400 bg-center"
            :style="getNthImage(3)"
          ></div>
          <div
            class="w-1/2 h-full ml-2 bg-gray-400 bg-center"
            :style="getNthImage(4)"
          ></div>
        </div>
        <div class="h-1/3 p-2 flex flex-row">
          <div
            class="w-1/2 h-full mr-2 bg-gray-400 bg-center"
            :style="getNthImage(5)"
          ></div>
          <div
            class="w-1/2 h-full ml-2 bg-gray-400 rounded-br-lg bg-center"
            :style="getNthImage(6)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getImageUrlAsStyle(url) {
      return `background-image: url(${url})`
    },
    getNthImage(n) {
      const index = n - 1
      if (this.hotel && this.hotel.images) {
        if (index < this.hotel.images.length) {
          return this.getImageUrlAsStyle(this.hotel.images[index])
        }
      }

      return ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.test {
  @apply rounded-br-lg;
}
</style>
