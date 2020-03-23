<template>
  <div class="w-full flex flex-row">
    <div class="w-full flex flex-col justify-between">
      <h3 class="text-lg text-black mb-2 flex justify-between">
        <span class="w-3/5">{{ room.name }}</span>
        <span class="w-2/5 text-right">
          <small class="text-gray-600 mr-1">Max Occupancy: </small>
          {{ room.max_occupancy }}
        </span>
      </h3>
      <p class="text-sm text-justify">
        {{ getTruncatedDescription(room.description) }}
      </p>
      <h2 class="text-lg justify-between flex mt-2 mb-2">
        <small class="text-gray-800">Price for 2 nights:</small>
        <span class="text-teal-400">${{ room.price_in_usd }}</span>
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    room: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getTruncatedDescription(strDescription) {
      if (!strDescription) return ''

      return strDescription.substring(0, 250) + '...'
    }
  }
}
</script>
