<template>
  <div class="container">
    <el-descriptions
      title="组件demo"
      direction="vertical"
      :column="6"
      border
    >
      <el-descriptions-item
        v-for="(item, index) in compLists"
        :key="index"
        :label="item.label"
      >
        <el-button
          v-for="(it, i) in item.children"
          :key="i"
          type="text"
          @click="$router.push(it.route)"
        >
          {{ it.text }}
        </el-button>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      compLists: [
        { label: '可视化', children: [
          { route: 'visualchart', text: '饼图' },
          { route: 'waterpond', text: '水位图' },
          { route: 'scrollboard', text: '滚动列表' },
        ] },
        { label: '代码编辑器', children: [{ route: 'sqleditor', text: 'sql编辑器' }] },
        { label: 'antv/x6', children: [{ route: 'dagchart', text: 'Dag图' }] },
        { label: '表单类', children: [
          { route: 'searchform', text: '查询表单' },
          { route: 'dialogform', text: '弹窗表单' },
        ] },
        { label: '表格', children: [{ route: 'pagintable', text: '带分页表格' }] },
        { label: '预览编辑excel', children: [{ route: 'luckysheet', text: 'luckysheet' }] },
      ]
    }
  }
}
</script>
