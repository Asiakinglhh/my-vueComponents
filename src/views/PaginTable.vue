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
    <Table
      v-loading="loading"
      :columns="tableColumns"
      :data="tableData"
      selection
      @selectionChange="val => multipleSelection = val"
    />
  </div>
</template>

<script>
import Table from '@/components/Table'

export default {
  name: 'PaginTable',
  components: { Table },
  data() {
    return {
      loading: false,
      tableColumns: [
        { title: '列1', key: 'test1' },
        { title: '列2', key: 'test2' },
        { title: '列3', key: 'test3' },
        { title: '列4', key: 'test4' },
        { title: '列5', key: 'test5' },
        { title: '列6', key: 'test6' }
      ],
      tableData: [],
      multipleSelection: []
    }
  },
  created() {
    this.loading = true
  },
  mounted() {
    this.tableData = [
      { test1: 123, test2: 'qwe', test3: 456, test4: 'asd', test5: 789, test6: 'zxc' },
      { test1: 123, test2: 'qwe', test3: 456, test4: 'asd', test5: 789, test6: 'zxc' },
      { test1: 123, test2: 'qwe', test3: 456, test4: 'asd', test5: 789, test6: 'zxc' },
      { test1: 123, test2: 'qwe', test3: 456, test4: 'asd', test5: 789, test6: 'zxc' },
      { test1: 123, test2: 'qwe', test3: 456, test4: 'asd', test5: 789, test6: 'zxc' },
      { test1: 123, test2: 'qwe', test3: 456, test4: 'asd', test5: 789, test6: 'zxc' }
    ]
    this.loading = false
  }
}
</script>
