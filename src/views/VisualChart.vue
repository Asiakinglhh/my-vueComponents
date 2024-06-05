<template>
  <div class="container">
    <el-button
      v-back
      type="primary"
      plain
      icon="el-icon-arrow-left"
    >
      返回
    </el-button>
    <Charts :option="chartOption" />
  </div>
</template>

<script>
import Charts from '@/components/Charts'

export default {
  name: 'VisualChart',
  components: {
    Charts
  },
  data() {
    return {
      pieData: []
    }
  },
  computed: {
    chartOption() {
      return {
        tooltip: {},
        legend: {
          type: 'scroll'
        },
        dataset: {
          source: this.pieData
        },
        series: {
          type: 'pie',
          label: {
            formatter: '{d}%'
            // formatter: params => params.value.value
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          encode: {
            itemName: 'name',
            value: 'value'
          }
        }
      }
    }
  },
  mounted() {
    this.pieData = [
      { name: 'test1', value: 123 },
      { name: 'test2', value: 123 },
      { name: 'test3', value: 123 },
      { name: 'test4', value: 123 }
    ]
  }
}
</script>
