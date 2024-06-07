<template>
  <el-row type="flex">
    <el-col
      v-for="(item, index) in option"
      :key="index"
      :ref="`item${index}`"
      :span="24 / option.length"
    >
      <dv-water-level-pond
        :key="key"
        :class="showBig ? 'big' :'small'"
        :config="config[index]"
        :style="{width: width, height: height}"
      />
    </el-col>
  </el-row>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'WaterLevelPond',
  props: {
    option: {
      type: Array,
      required: true
    },
    showBig: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      key: 0,
      resizeObserver: null,
      width: '150px',
      height: '150px'
    }
  },
  computed: {
    copyData() {
      const temp = cloneDeep(this.option)
      temp.forEach(it => {
        it.waveHeight = 10
      })
      return temp
    },
    config() {
      return this.showBig ? this.option : this.copyData
    }
  },
  created() {
    this.resizeObserver = new window.ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      const size = width < height ? width : height
      this.width = size + 'px'
      this.height = size + 'px'
      this.key += 1
    })
  },
  mounted() {
    this.resizeHandler()
  },
  updated() {
    this.resizeHandler()
  },
  beforeDestroy() {
    this.resizeObserver.disconnect()
  },
  methods: {
    resizeHandler() {
      this.$nextTick(() => {
        this.resizeObserver.observe(this.$refs.item0[0].$el)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  height: 100%;
  .el-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dv-water-pond-level {
    transition: all .3s;
    ::v-deep text {
      fill: #fff;
      stroke: none;
    }
    &.small ::v-deep text {
      font-size: 18px;
    }
  }
}
</style>
