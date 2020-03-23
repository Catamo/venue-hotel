<template>
  <div class="text-md p-4 text-gray-800 border-t border-gray-400 w-full">
    <div class="flex justify-between font-bold" @click="toggleCollapseHandler">
      <span>{{ title }}:</span>
      <svg
        class="fill-current h-5 w-5 mt-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
    <div class="filter-options  mt-4" :class="{ hidden: optionsCollapsed }">
      <div
        v-for="(option, index) in options"
        :key="`option-${index}`"
        class="filter-option mt-3 flex flex-row"
      >
        <div
          class="checkcontainer relative"
          @click="optionClickHandler(option)"
        >
          <input
            v-model="checkedOptions"
            :value="option"
            type="checkbox"
            class="hidden"
          />
          <div class="checkmark relative"></div>
        </div>
        <div class="text-sm ml-2 w-full">
          <span>{{ option.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checkedOptions: [],
      optionsCollapsed: false
    }
  },
  methods: {
    getFilterObject() {
      return {
        propToFilterBy: this.prop,
        filterValues: this.checkedOptions.map((x) => x.value)
      }
    },
    optionClickHandler(option) {
      for (let i = 0; i < this.checkedOptions.length; i++) {
        if (this.checkedOptions[i] === option) {
          this.checkedOptions.splice(i, 1)
          this.$emit('filterChanged', this.getFilterObject())
          return
        }
      }

      this.checkedOptions.push(option)
      this.$emit('filterChanged', this.getFilterObject())
    },
    toggleCollapseHandler() {
      this.optionsCollapsed = !this.optionsCollapsed
    }
  }
}
</script>

<style lang="postcss" scoped>
.checkcontainer input:checked ~ .checkmark {
  @apply bg-gray-800;
}

.checkmark {
  @apply w-5 h-5 border border-gray-600;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

.checkcontainer input:checked ~ .checkmark:after {
  display: block;
}

.checkcontainer .checkmark:after {
  left: 8px;
  top: 4px;
  width: 7px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}
</style>
