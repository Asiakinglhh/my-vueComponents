<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, #app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
