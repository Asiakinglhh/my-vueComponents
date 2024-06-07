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
    <ScrollBoard :option="option" />
  </div>
</template>

<script>
import ScrollBoard from '@/components/ScrollBoard'

export default {
  name: 'ScrollBoardPage',
  components: { ScrollBoard },
  data() {
    return {
      scrollBoardData: []
    }
  },
  computed: {
    option() {
      return {
        data: this.scrollBoardData,
        align: ['center', 'center', 'left', 'center'],
        rowNum: 5
      }
    }
  },
  created() {
    this.scrollBoardData = [
      ['2024-06-07', 'warn', '警告asfasgasgagagqw啊是发噶各岗位二八七七八七', '进行中'],
      ['2024-06-07', 'success', '警告asfasgasgagagqw啊是发噶各岗位二八七七八七', '进行中'],
      ['2024-06-07', 'info', '警告asfasgasgagagqw啊是发噶各岗位二八七七八七', '进行中'],
      ['2024-06-07', 'error', '警告asfasgasgagagqw啊是发噶各岗位二八七七八七', '进行中'],
      ['2024-06-07', 'warning', '警告asfasgasgagagqw啊是发噶各岗位二八七七八七', '进行中'],
      ['2024-06-07', 'complete', '警告asfasgasgagagqw啊是发噶各岗位二八七七八七', '进行中'],
      ['2024-06-07', 'ending', '警告asfasgasgagagqw啊是发噶各岗位二八七七八七', '进行中'],
      ['2024-06-07', 'starting', '警告asfasgasgagagqw啊是发噶各岗位二八七七八七', '进行中'],
    ]
  }
}
</script>

<style>

</style>
