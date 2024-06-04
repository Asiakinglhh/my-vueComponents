<template>
  <div
    :id="domKey"
    :ref="domKey"
    style="height: 100%; width: 100%;"
  />
</template>

<script>
export default {
  name: 'LuckySheet',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      resizeObserver: undefined
    }
  },
  computed: {
    domKey() {
      return this.option.container
    }
  },
  mounted() {
    window.luckysheet.create(this.option)
    this.resizeObserver = new ResizeObserver(() => window.luckysheet.resize())
    this.resizeObserver.observe(this.$refs[this.domKey])
  },
  beforeDestroy() {
    this.resizeObserver.disconnect()
    window.luckysheet.destroy()
  }
}
</script>
