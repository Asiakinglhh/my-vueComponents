<template>
  <dv-scroll-board
    :config="option"
    @mousemove.native="handleMousemove"
    @mouseover="handleMouseover"
    @mouseleave.native="handleMouseleave"
    @mouseenter.native="handleMouseenter"
  />
</template>

<script>
export default {
  name: 'ScrollBoard',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tooltipDomClassName: 'tooltip__scrollBoard'
    }
  },
  created() {
    this.createTooltipDom()
  },
  mounted() {
    this.createTooltipDom()
  },
  methods: {
    createTooltipDom() {
      const dom = document.getElementsByClassName(this.tooltipDomClassName)[0]
      if (!dom) {
        const tooltipDom = document.createElement('div')
        tooltipDom.className = this.tooltipDomClassName
        tooltipDom.style.display = 'none'
        const childrenDom = document.createElement('div')
        childrenDom.className = 'popper__arrow'
        childrenDom.style = 'left: 43.5px;'
        tooltipDom.appendChild(childrenDom)
        document.body.appendChild(tooltipDom)
      }
    },
    handleMousemove(event) {
      const { pageX, pageY } = event
      const dom = document.getElementsByClassName(this.tooltipDomClassName)[0]
      if (dom) {
        dom.style.left = pageX + 'px'
        dom.style.top = pageY + 'px'
      }
    },
    handleMouseover(event) {
      const { ceil } = event
      const dom = document.getElementsByClassName(this.tooltipDomClassName)[0]
      if (dom) {
        if (dom.childElementCount < 2) {
          const contentDom = document.createElement('div')
          contentDom.textContent = ceil
          dom. insertBefore(contentDom, dom.children[0])
        } else {
          dom.children[0].textContent = ceil
        }
      }
    },
    handleMouseleave() {
      const dom = document.getElementsByClassName(this.tooltipDomClassName)[0]
      if (dom && !dom.style.display) {
        dom.style.display = 'none'
      }
    },
    handleMouseenter() {
      const dom = document.getElementsByClassName(this.tooltipDomClassName)[0]
      if (dom && dom.style.display === 'none') {
        dom.style.display = ''
      }
    }
  }
}
</script>

<style lang="scss">
.tooltip__scrollBoard {
  transform-origin: center bottom;
  z-index: 2051;
  position: absolute;
  padding: 10px 10px 0 10px;
  background-color: #222;
  color: #fff;
  border-radius: 4px;
  div:first-child {
    margin-bottom: 10px;
    white-space: pre-wrap;
  }
  .popper__arrow {
    background-color: #222;
  }
  transition: all .2s;
}
</style>
