import { Graph } from '@antv/x6'
import config from './config'
import ContextMenuTool from './ContextMenuTool.jsx'
import TooltipTool from './TooltipTool.jsx'

Graph.registerNode('custom-rect', {
  inherit: 'rect',
  width: 100,
  height: 40,
  attrs: config.nodeAttrs,
  ports: config.ports,
  tools: config.nodeTools
}, true)

Graph.registerNode('custom-ellipse', {
inherit: 'ellipse',
width: 100,
height: 40,
attrs: config.nodeAttrs,
ports: config.ports,
tools: config.nodeTools
}, true)

Graph.registerNode('custom-polygon', {
  inherit: 'polygon',
  width: 100,
  height: 40,
  attrs: config.nodeAttrs,
  ports: config.ports,
  tools: config.nodeTools
}, true)

Graph.registerNode('custom-circle', {
  inherit: 'circle',
  width: 40,
  height: 40,
  attrs: config.nodeAttrs,
  ports: config.ports,
  tools: config.nodeTools
}, true)

Graph.registerNodeTool('contextmenu', ContextMenuTool, true)
Graph.registerNodeTool('tooltip', TooltipTool, true)
