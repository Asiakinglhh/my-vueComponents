<template>
  <div class="chart_container">
    <div
      ref="chart"
      class="chart"
    />
    <slot />
    <template v-if="withDialog">
      <el-button
        type="primary"
        class="upper-right"
        @click="dialogVisible = true"
      >
        {{ buttonText }}
      </el-button>
      <el-dialog
        :visible.sync="dialogVisible"
        :title="dialogTitle"
        :width="dialogWidth"
        :fullscreen="dialogFullscreen"
        append-to-body
      >
        <template slot="default">
          <slot name="dialog" />
        </template>
        <template slot="footer">
          <el-button @click="dialogVisible = false">
            取消
          </el-button>
          <el-button
            type="primary"
            @click="handleConfirmClick"
          >
            确定
          </el-button>
        </template>
      </el-dialog>
    </template>
  </div>
</template>

<script>
import { isEmpty, isFunction } from 'lodash'
import * as echarts from 'echarts'
// import 'echarts-wordcloud' echarts: 4.x版本才支持

const instances = new WeakMap()

export default {
    name: 'ChartsComponent',
    props: {
        option: {
            type: Object,
            required: true,
        },
        eventHandler: {
            type: Object,
            default: () => {}
        },
        buttonText: {
            type: String,
            default: ''
        },
        dialogTitle: {
            type: String,
            default: ''
        },
        dialogWidth: {
            type: String,
            default: '50%'
        },
        dialogFullscreen: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            resizeObserver: null,
            dialogVisible: false
        }
    },
    computed: {
        withDialog() {
            return !isEmpty(this.$slots['dialog'])
        }
    },
    watch: {
        option: {
            deep: true,
            handler() {
                this.setChartOptions()
            }
        }
    },
    mounted() {
        this.initChart()
    },
    beforeDestroy() {
        this.clearCache()
    },
    methods: {
        handleConfirmClick() {
            this.dialogVisible = false
            this.$emit('confirmClick')
        },
        getChartInstance() {
            return instances.get(this.$refs.chart)
        },
        initChart() {
            this.clearCache()
            // 根据全局主题选择是否启用暗色横式
            const chartElement = this.$refs.chart
            if (this.isDarkMode){
                instances.set(chartElement, echarts.init(chartElement, 'dark'))
            } else {
                instances.set(chartElement, echarts.init(chartElement, 'customedTheme'))
            }
            // 自适应
            const ResizeObserver = window.ResizeObserver
            this.resizeObserver = new ResizeObserver(() => { this.getChartInstance().resize() })
            this.resizeObserver.observe(chartElement)
        },
        setChartOptions() {
            const chartInstance = this.getChartInstance()
            chartInstance.setOption(this.option, true)
            // 设置事件处理器
            Object.keys(this.eventHandler).forEach(eventName => {
                const handler = this.eventHandler[eventName]
                if (isFunction(handler)) {
                    chartInstance.on(eventName, handler)
                } else {
                    throw new Error(`Event handler for event "${eventName}" is not a function`)
                }
            })
        },
        clearCache() {
            const chartInstance = this.getChartInstance()
            if (chartInstance && !chartInstance.isDisposed()) {
                chartInstance.dispose()
            }
            if (this.resizeObserver) {
                this.resizeObserver.disconnect()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.chart_container {
    position: relative;
    .upper-right {
        position: absolute;
        top: 10px;
        right: 10px;
    }
}
.chart_container, .chart {
    width: 100%;
    height: 100%;
}
</style>
