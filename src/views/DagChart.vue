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
      icon="el-icon-document-checked"
    >
      保存
    </el-button>
    <span class="color-tip">
      执行状态：
      <span class="init" />
      初始状态
      <span class="process" />
      处理中
      <span class="success" />
      成功
      <span class="fail" />
      失败
    </span>
    <Graph
      :option="graphOpts"
      :data="graphData"
      stencil
      :stencil-opts="stencilOpts"
      :stencil-nodes="stencilNodes"
    />
  </div>
</template>

<script>
import Graph from '@/components/Graph'
import config from '@/components/Graph/config'

export default {
  name: 'DagChart',
  components: { Graph },
  data() {
    return {
      graphOpts: {
        async: false
      },
      graphData: {
        nodes: [{
          id: 'node1',
          shape: 'custom-rect',
          x: 40,
          y: 40,
          label: 'hello'
        }, {
          id: 'node2',
          shape: 'custom-ellipse',
          x: 160,
          y: 180,
          label: 'world',
          attrs: {
            body: {
              stroke: '#52c41a',
              strokeWidth: 1,
              fill: '#fff',
              rx: 6,
              ry: 6
            }
          }
        }, {
          id: 'node3',
          shape: 'custom-polygon',
          x: 300,
          y: 180,
          label: 'world',
          attrs: {
            body: {
              refPoints: '0,10 10,0 20,10 10,20',
              stroke: '#e6a23c',
              strokeWidth: 1,
              fill: '#fff',
              rx: 6,
              ry: 6
            }
          }
        }, {
          id: 'node4',
          shape: 'custom-circle',
          x: 500,
          y: 180,
          label: 'world',
          attrs: {
            body: {
              stroke: '#f56c6c',
              strokeWidth: 1,
              fill: '#fff',
              rx: 6,
              ry: 6
            }
          }
        }],
        edges: [{
          shape: 'edge',
          source: { cell: 'node1', port: 'bottom1' },
          target: { cell: 'node2', port: 'top1' },
          label: 'x6',
          attrs: config.edgeAttrs
        }],
      },
      stencilOpts: {
        groups: [{
          title: '基础',
          name: 'group1'
        }, {
          title: '系统',
          name: 'group2'
        }]
      },
      stencilNodes: {
        group1: [{
          shape: 'custom-rect',
          label: '开始'
        }, {
          shape:'custom-ellipse',
          label: '过程'
        }, {
          shape:'custom-polygon',
          label: '决策',
          attrs: {
            body: {
              refPoints: '0,10 10,0 20,10 10,20'
            }
          }
        }],
        group2: [{
          shape:'custom-polygon',
          label: '数据',
          attrs: {
            body: {
              refPoints: '10,0 40,0 30,20 0,20'
            }
          }
        }, {
          shape: 'custom-circle',
          label: '连接'
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.color-tip {
  span {
    width: 12px;
    height: 12px;
    display: inline-block;
    &.init {
      background-color: #8f8f8f;
    }
    &.process {
      background-color: #e6a23c;
    }
    &.success {
      background-color: #52c41a;
    }
    &.fail {
      background-color: #f56c6c;
    }
  }
}
.graph-container {
  height: calc(100% - 39px);
}
</style>
