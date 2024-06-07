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
    <WaterLevelPond
      :option="option"
      show-big
    />
  </div>
</template>

<script>
import WaterLevelPond from '@/components/WaterLevelPond'

export default {
  name: 'WaterPond',
  components: { WaterLevelPond },
  data() {
    return {
      waterPondData: {
        test1: 50,
        test2: 100,
        test3: 150
      }
    }
  },
  computed: {
    option() {
      return [{
        data: [this.waterPondData.test1],
        shape: 'round',
        colors: ['red', 'red'],
        waveNum: 1,
        formatter: '驱蚊器无\n{value}ci'
      }, {
        data: [this.waterPondData.test2],
        shape: 'round',
        colors: ['yellow', 'yellow'],
        waveNum: 1,
        formatter: '是的公司\n{value}ci'
      }, {
        data: [this.waterPondData.test3],
        shape: 'round',
        colors: ['green', 'green'],
        waveNum: 1,
        formatter: '一体机\n{value}ci'
      }]
    }
  }
}
</script>
