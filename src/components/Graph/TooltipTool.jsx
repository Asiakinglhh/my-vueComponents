import Vue from 'vue'
import { ToolsView } from '@antv/x6'
import { Tooltip } from 'element-ui'

class TooltipTool extends ToolsView.ToolItem {
  knob = null
  tooltipDom = null
  tooltipComp = null

  render() {
    if (!this.knob) {
      this.knob = ToolsView.createElement('div', false)
      this.knob.style.position = 'absolute'
      this.tooltipDom = ToolsView.createElement('div', false)
      this.knob.appendChild(this.tooltipDom)
      this.container.appendChild(this.knob)
    }
    return this
  }

  toggleTooltip(visible) {
    if (this.tooltipComp) {
      this.tooltipComp.$destroy()
      this.knob.innerHTML = ''
      this.knob.appendChild(this.tooltipDom)
      this.tooltipComp = null
    }

    if (visible) {
      const that = this
      this.tooltipComp = new Vue({
        el: this.tooltipDom,
        components: { Tooltip },
        render() {
          return (
            // 假如遇到effect不生效，就用style去调样式
            <Tooltip value={true} effect='dark' placement="top">
              <div />
              <div slot="content">
                标题：{that.options.content}
              </div>
            </Tooltip>
          )
        }
      })
    }
  }

  updatePosition(e) {
    const style = this.knob.style
    if (e) {
      const p = this.graph.clientToGraph(e.clientX, e.clientY)
      style.display = 'block'
      style.left = `${p.x}px`
      style.top = `${p.y}px`
    } else {
      style.display = 'none'
      style.left = '-1000px'
      style.top = '-1000px'
    }
  }

  onMosueEnter({ e }) {
    if (typeof e.target.className === 'string' && e.target.className.includes('x6-port-body')) {
      this.updatePosition()
      this.toggleTooltip(false)
    } else {
      this.updatePosition(e)
      this.toggleTooltip(true)
    }
  }

  onMouseLeave() {
    this.updatePosition()
    this.toggleTooltip(false)
  }

  onMouseMove() {
    this.updatePosition()
    this.toggleTooltip(false)
  }

  delegateEvents() {
    this.cellView.on('cell:mouseenter', this.onMosueEnter, this)
    this.cellView.on('cell:mouseleave', this.onMouseLeave, this)
    this.cellView.on('cell:mousemove', this.onMouseMove, this)
    return super.delegateEvents()
  }

  onRemove() {
    this.toggleTooltip(false)  
    this.cellView.off('cell:mouseenter', this.onMosueEnter, this)
    this.cellView.off('cell:mouseleave', this.onMouseLeave, this)
    this.cellView.off('cell:mousemove', this.onMouseMove, this)
  }
}

TooltipTool.config({
  tagName: 'div',
  isSVGElement: false,
})

export default TooltipTool
