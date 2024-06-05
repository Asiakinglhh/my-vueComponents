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
      @click="handleFormat"
    >
      格式化
    </el-button>
    <el-button
      type="primary"
      icon="el-icon-caret-right"
    >
      执行
    </el-button>
    <Codemirror
      :value.sync="sqlStatement"
      :option="option"
    />
  </div>
</template>

<script>
import Codemirror from '@/components/Codemirror'
import 'codemirror/mode/sql/sql'
import 'codemirror/addon/hint/sql-hint'
import 'codemirror/theme/material-darker.css'
import { format } from 'sql-formatter'

export default {
  name: 'SqlEditor',
  components: { Codemirror },
  data() {
    return {
      sqlStatement: "select * from xxx a where a.xxx = 'qwe' and between '123' and '345' join xxx union xxx",
      option: {
        mode: 'text/x-sql',
        theme: 'material-darker'
      }
    }
  },
  methods: {
    handleFormat() {
      this.sqlStatement = format(this.sqlStatement)
    }
  }
}
</script>
