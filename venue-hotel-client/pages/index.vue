<template>
  <div>
    <header class="h-64 w-full flex items-center justify-center">
      <div class="flex flex-col">
        <h1 class="text-gray-600 text-4xl font-semibold">
          <span class="text-black">Leipzig,</span> Germany
        </h1>
      </div>
    </header>
    <div class="flex mt-12 px-3">
      <div class="px-3 w-1/5 lg:block hidden">
        <div class="w-full">
          <div
            class="border border-gray-400 rounded-lg flex flex-col justify-between leading-normal bg-white"
          >
            <div>
              <h3 class="text-xl py-4 px-6 flex items-center">
                Filters
              </h3>
              <hotels-results-filters />
            </div>
          </div>
        </div>
      </div>
      <div class="px-3 w-full lg:w-4/5">
        <div class="bg-white rounded-lg border-gray-400 border">
          <h3 class="text-xl py-4 px-6 flex items-center">
            Recommended Accommodation
          </h3>
          <hr class="border-gray-400" />
          <div class="px-2">
            <hotels-results-container />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotelsResultsContainer from '../components/Hotels/HotelsResultsContainer'
import HotelsResultsFilters from '../components/Hotels/HotelsResultsFiltersContainer'

export default {
  components: {
    HotelsResultsContainer,
    HotelsResultsFilters
  }
}
</script>
