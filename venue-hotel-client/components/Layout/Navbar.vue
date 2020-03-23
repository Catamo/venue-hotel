<template>
  <nav class="flex items-center justify-between flex-wrap p-3">
    <router-link to="/" class="flex items-center flex-shrink-0 text-black mr-6">
      <img
        class="header-image"
        src="https://vuejs.org/images/logo.png"
        alt="Vue.js Logo"
      />
      <div class="flex flex-col">
        <span class="font-semibold text-xl leading-tight">VueConf</span>
        <span class="font-light text-sm leading-none">Leipzig</span>
      </div>
    </router-link>
    <div>
      <div>
        <div
          style="background-image: url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=2&auto=format&fit=crop&w=140&h=200&q=60)"
          alt="User image"
          class="rounded-full h-10 w-10 bg-center bg-cover"
        ></div>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
nav img {
  @apply fill-current h-8 mr-2;
}
</style>
