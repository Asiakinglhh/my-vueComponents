const nodeAttrs = {
  body: {
    stroke: '#8f8f8f',
    strokeWidth: 1,
    fill: '#fff',
    rx: 6,
    ry: 6
  }
}

const edgeAttrs = {
  line: {
    stroke: '#8f8f8f',
    strokeWidth: 2
  }
}

const portsAttrs = {
  circle: {
    r: 4,
    magnet: true,
    stroke: '#5f95ff',
    strokeWidth: 1,
    fill: '#fff',
    style: {
      visibility: 'hidden'
    }
  }
}

const ports = {
  groups: {
    top: {
      position: 'top',
      attrs: portsAttrs
    },
    right: {
      position: 'right',
      attrs: portsAttrs
    },
    bottom: {
      position: 'bottom',
      attrs: portsAttrs
    },
    left: {
      position: 'left',
      attrs: portsAttrs
    }
  },
  items: [
    { id: 'top1', group: 'top' },
    { id: 'right1', group: 'right' },
    { id: 'bottom1', group: 'bottom' },
    { id: 'left1', group: 'left' }
  ]
}

const nodeTools = [
  {
    name: 'contextmenu',
    args: {
      menu: [
        { label: '跳过' },
        { label: '重执行' },
        { label: '结束' }
      ]
    }
  },
  {
    name: 'tooltip',
    args: {
      content: '测试tooltip'
    }
  }
]

export default {
  nodeAttrs,
  edgeAttrs,
  ports,
  nodeTools
}
