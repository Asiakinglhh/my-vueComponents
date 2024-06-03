<template>
  <codemirror
    ref="cmRef"
    v-model="codeValue"
    :options="cmOption"
    @inputRead="onInputRead"
  />
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'

export default {
  name: 'CodeMirror',
  components: { codemirror },
  props: {
    value: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    codeValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      }
    }
  },
  cmOption() {
    return {
      tabSize: 2,
      lineNumbers: true,
      line: true,
      styleActiveLine: true,
      scrollbarStyle: 'overlay',
      matchBrackets: true,
      autoCloseBrackets: true,
      gutters: ['CodeMirror-lint-markers'],
      lint: true,
      showHint: true,
      hintOptions: {
        completeSingle: false
      },
      ...this.option
    }
  },
  methods: {
    onInputRead(cm) {
      cm.showHint()
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-codemirror, >>> .CodeMirror {
  height: 100%;
}
</style>
