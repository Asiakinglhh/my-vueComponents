<template>
  <div class="graph-container">
    <div ref="graph" />
    <div
      v-if="stencil"
      id="stencil"
      ref="stencil"
    />
  </div>
</template>

<script>
import { Graph, Shape, Addon } from '@antv/x6'
import config from './config'

export default {
  name:'GraphComponent',
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    },
    stencil: {
      type: Boolean,
      default: false
    },
    stencilOpts: {
      type: Object,
      default:() => ({})
    },
    stencilNodes: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      graphInstance: null,
      graphOptions: {
        container: null,
        autoResize: true,
        grid: {
          visible: true
        },
        background: {
          color: '#f2f7fa'
        },
        snapline: {
          enabled: true,
          sharp: true
        },
        scroller: {
          enabled: true,
          pannable: true
        },
        history: true,
        clipboard: true,
        keyboard: true,
        mousewheel: {
          enabled: true,
          modifiers: 'ctrl'
        },
        selecting: {
          enabled: true,
          multipleSelectionModifiers: 'ctrl|shift|meta',
          rubberband: true,
          rubberEdge: true,
          modifiers: 'ctrl|shift|meta',
          showNodeSelectionBox: true,
          showEdgeSelectionBox: true
        },
        rotating: true,
        resizing: true,
        connecting: {
          snap: {
            radius: 20
          },
          allowBlank: false,
          router: {
            name: 'manhattan',
            args: {
              padding: 1
            }
          },
          connector: {
            name: 'rounded',
            args: {
              radius: 10
            }
          },
          createEdge: () => new Shape.Edge({
            attrs: config.edgeAttrs,
            zIndex: 0
          })
        },
        async: true
      },
      stencilOptions: {
        title: '节点分类',
        target: null,
        collapsable: true,
        stencilGraphWidth: 250, // 和 $stencilWidth 大小对应
        stencilGraphHeight: 180,
        groups: []
      }
    }
  },
  mounted() {
    this.initGraph()
  },
  beforeDestroy() {
    this.graphInstance.dispose()
  },
  methods: {
    initGraph() {
      const graph = new Graph({
        ...this.graphOptions,
        ...this.options,
        container: this.$refs.graph
      })
      if (Object.keys(this.data).length) {
        graph.fromJSON(this.data)
        graph.centerContent()
      }
      this.keyboardEvent(graph)
      this.eventHandler(graph)
      if (this.stencil) {
        this.initStencil(graph)
      }
      this.graphInstance = graph
    },
    keyboardEvent(graph) {
      graph
        .bindKey(['ctrl+c', 'meta+c'], () => {
          const cells = graph.getSelectedCells()
          if (!cells.length) return
          graph.copy(cells)
        })
        .bindKey(['ctrl+v', 'meta+v'], () => {
          if (graph.isClipboardEmpty()) return
          const cells = graph.paste()
          graph.cleanSelection()
          graph.select(cells)
        })
        .bindKey(['ctrl+x','meta+x'], () => {
          const cells = graph.getSelectedCells()
          if (!cells.length) return
          graph.cut()
        })
        .bindKey(['ctrl+z', 'meta+z'], () => {
          graph.history.undo()
        })
        .bindKey(['ctrl+y','metaty'], () => {
          graph.history.redo()
        })
        .bindKey('esc', () => {
          if (!graph.isSelectionEmpty()) {
            graph.cleanSelection()
          }
        })
        .bindKey(['backspace','delete'], () => {
          const cells = graph.getSelectedCells()
          if (!cells.length) return
          graph.removeCells(cells)
        })
        .bindKey(['ctrl+a', 'meta+a'], () => {
          const nodes = graph.getNodes()
          if (!nodes) return
          graph.select(nodes)
        })
    },
    eventHandler(graph) {
      const graphDom = this.$refs.graph
      const that = this
      graph
        .on('cell:dblclick', ({ cell, e }) => {
          const name = cell.isNode() ? 'node-editor' : 'edge-editor'
          cell.removeTool(name)
          cell.addTools({
            name,
            args: {
              event: e
            }
          })
        })
        .on('node:mouseenter', () => {
          const ports = graphDom.querySelectorAll('.x6-port-body')
          that.showPorts(ports, true)
        })
        .on('node:mouseleave', () => {
          const ports = graphDom.querySelectorAll('.x6-port-body')
          that.showPorts(ports, false)
        })
    },
    showPorts(ports, show) {
      ports.forEach(port => {
        port.style.visibility = show ? 'visible' : 'hidden'
      })
    },
    initStencil(graph) {
      const stencil = new Addon.Stencil({
        ...this.stencilOptions,
        ...this.stencilOpts,
        target: graph
      })
      this.$refs.stencil.appendChild(stencil.container)
      const stencilNodesKeys = Object.keys(this.stencilNodes)
      const stencilGroups = this.stencilOpts.groups
      if (stencilNodesKeys.length && stencilGroups.length) {
        for (let i = 0; i < stencilNodesKeys.length; i++) {
          const key = stencilNodesKeys[i]
          if (!stencilGroups.some(item => item.name === key)) continue
          const nodes = this.stencilNodes[key].map(node => graph.createNode(node))
          stencil.load(nodes, key)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$stencilWidth: 250px;

.graph-container {
  width: 100%;
  height: 100%;
  display: flex;
  ::v-deep .x6-graph-scroller {
    width: calc(100% - $stencilWidth) !important;
    height: 100% !important;
  }
  #stencil {
    width: $stencilWidth;
    height: 100%;
    position: relative;
  }
}
</style>
