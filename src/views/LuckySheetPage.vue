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
    <el-button
      type="primary"
      icon="el-icon-upload2"
    >
      导入
    </el-button>
    <el-button
      type="primary"
      icon="el-icon-document"
    >
      保存
    </el-button>
    <el-button
      type="primary"
      icon="el-icon-download"
    >
      导出
    </el-button>
    <h3>表名</h3>
    <LuckySheet :option="option" />
  </div>
</template>

<script>
import LuckySheet from '@/components/LuckySheet'
import { createSheetOpts, luckyDefaultOptions } from '@/components/LuckySheet/utils'

export default {
  components: { LuckySheet },
  data() {
    return {
      option: {}
    }
  },
  created() {
    this.option = luckyDefaultOptions(createSheetOpts())
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>