import Vue from 'vue'
import { ToolsView } from '@antv/x6'
import { DropdownItem } from 'element-ui'

class ContextMenuTool extends ToolsView.ToolItem {
  knob = null
  timer = null
  dropdownMenuDom = null
  dropdownMenuComp = null

  render() {
    if (!this.knob) {
      this.knob = ToolsView.createElement('div', false)
      this.knob.style.position = 'absolute'
      this.dropdownMenuDom = ToolsView.createElement('div', false)
      this.knob.appendChild(this.dropdownMenuDom)
      this.container.appendChild(this.knob)
    }
    return this
  }

  toggleContextMenu(visible) {
    if (this.dropdownMenuComp) {
      this.dropdownMenuComp.$destroy()
      this.knob.innerHTML = ''
      this.knob.appendChild(this.dropdownMenuDom)
      this.dropdownMenuComp = null
    }
    document.removeEventListener('mousedown', this.onMouseDown)

    if (visible) {
      const that = this
      this.dropdownMenuComp = new Vue({
        el: this.dropdownMenuDom,
        components: { DropdownItem },
        render() {
          return (
            <ul
              class='el-dropdown-menu el-popper'
              x-placement='bottom-end'
              style='width: max-content; z-index: 1000; border-radius: 4px'
          >
            {that.options.menu.map(it => <DropdownItem><span onClick={that.handleClick}>{it.label}</span></DropdownItem>)}
          </ul>
          )
        }
      })
      document.addEventListener('mousedown', this.onMouseDown)
    }
  }

  handleClick = (e) => {
    console.log(e.target.innerText, this)
  }

  updatePosition(e) {
    const style = this.knob.style
    if (e) {
      const pos = this.graph.clientToGraph(e.clientX, e.clientY)
      style.left = `${pos.x}px`
      style.top = `${pos.y}px`
    } else {
      style.left = '-1000px'
      style.top = '-1000px'
    }
  }

  onMouseDown = () => {
    this.timer = setTimeout(() => {
      this.updatePosition()
      this.toggleContextMenu(false)
    }, 200)
  }

  onContextMenu({ e }) {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = 0
    }
    this.updatePosition(e)
    this.toggleContextMenu(true)
  }

  delegateEvents() {
    this.cellView.on('cell:contextmenu', this.onContextMenu, this)
    return super.delegateEvents()
  }

  onRemove() {
    this.cellView.off('cell:contextmenu', this.onContextMenu, this)
  }
}

ContextMenuTool.config({
  tagName: 'div',
  isSVGElement: false,
})

export default ContextMenuTool
