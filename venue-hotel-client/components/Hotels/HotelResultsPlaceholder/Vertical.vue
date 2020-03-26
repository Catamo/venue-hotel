<template>
  <div class="flex flex-wrap">
    <div
      v-for="placeholder in range"
      :key="placeholder"
      class="w-full sm:w-1/2 lg:w-1/4 md:w-1/3 p-3"
    >
      <content-placeholders>
        <content-placeholders-img />
        <content-placeholders-heading />
        <content-placeholders-text :lines="2" />
      </content-placeholders>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Number,
      default: 1
    }
  },
  computed: {
    range() {
      return new Array(this.items).fill(0).map((x) => 'placeholder-' + x)
    }
  }
}
</script>

<style lang="postcss">
.flex .vue-content-placeholders > * {
  @apply px-1;
}

.flex .vue-content-placeholders-img {
  @apply h-40 rounded-md;
}
@screen xl {
  .flex .vue-content-placeholders-img {
    @apply h-64;
  }
}

.flex [class^='vue-content-placeholders-'] + .vue-content-placeholders-heading {
  @apply mt-2;
}

.flex [class^='vue-content-placeholders-'] + .vue-content-placeholders-text {
  margin-top: 10px !important;
}
</style>
