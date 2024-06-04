<template>
  <div class="container">
    <el-descriptions
      title="组件demo"
      direction="vertical"
      :column="5"
      border
    >
      <el-descriptions-item label="可视化">
        <el-button
          type="text"
          @click="$router.push('visualchart')"
        >
          饼图
        </el-button>
      </el-descriptions-item>
      <el-descriptions-item label="代码编辑器">
        <el-button
          type="text"
          @click="$router.push('sqleditor')"
        >
          sql编辑器
        </el-button>
      </el-descriptions-item>
      <el-descriptions-item label="antv/x6">
        <el-button
          type="text"
          @click="$router.push('dagchart')"
        >
          Dag图
        </el-button>
      </el-descriptions-item>
      <el-descriptions-item label="表单类">
        <el-button
          type="text"
          @click="$router.push('searchform')"
        >
          查询表单
        </el-button>
        <el-button
          type="text"
          @click="$router.push('dialogform')"
        >
          弹窗表单
        </el-button>
      </el-descriptions-item>
      <el-descriptions-item label="表格">
        <el-button
          type="text"
          @click="$router.push('table')"
        >
          带分页表格
        </el-button>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
