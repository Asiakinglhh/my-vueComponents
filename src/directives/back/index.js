function handleClick(el, binding, vnode) {
  const instance = vnode.context
  // instance.$root.$children[0].$children[0].delTag(instance.$route)
  // instance.$router.replace({ name: binding.arg })
  instance.$router.replace({ path: '/homepage' })
}

export default {
  bind(el, binding, vnode) {
    el.addEventListener('click', ()=> handleClick(el, binding, vnode))
  },
  unbind(el, binding, vnode){
    el.removeEventListener('click', () => handleClick(el, binding, vnode))
  }
}
