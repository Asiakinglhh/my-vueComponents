<template>
  <div class="table-container">
    <el-table
      v-bind="$attrs"
      :data="data"
      :size="size"
      :border="border"
      stripe
      @selection-change="val => $emit('selectionChange', val)"
    >
      <el-table-column
        v-if="selection"
        type="selection"
        align="center"
        width="40px"
      />
      <el-table-column
        v-for="it in columns"
        :key="it.key"
        :prop="it.key"
        :label="it.title"
        :width="it.width"
        :align="it.align || 'center'"
        :header-align="it.headerAlign || 'center'"
        :formatter="it.formatter"
      />
      <slot />
    </el-table>
    <pagination
      :page="current"
      :limit="pageSize"
      :total="total"
      :page-sizes="pageSizes"
      :layout="layout"
      :hidden="!data.length"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import Pagination from '../Pagination'

export default {
  name: 'TableComponent',
  components: { Pagination },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default:() => []
    },
    size: {
      type: String,
      default: 'small'
    },
    border: {
      type: Boolean,
      default: true
    },
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    total: {
      type:Number,
      default: 0
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    selection: {
      type: Boolean,
      dafault: false
    }
  },
  emits: ['selectionChange']
}
</script>

<style scoped>
.el-button + .table-container {
  margin-top: 5px
}
</style>