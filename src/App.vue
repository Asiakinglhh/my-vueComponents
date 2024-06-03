<template>
  <div id="app">
    <VisualChart />
  </div>
</template>

<script>
import VisualChart from './views/VisualChart'

export default {
  name: 'App',
  components: {
    VisualChart
  }
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
