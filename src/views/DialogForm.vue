<template>
  <div class="container">
    <el-button
      type="primary"
      @click="showDialog = true"
    >
      弹出
    </el-button>
    <DialogForm
      title="标题"
      width="30%"
      :visible.sync="showDialog"
      :form-opts="dialogFormOpts"
      :form-data.sync="dialogForm"
      @onConfirm="confirm"
      @onCancel="showDialog = false"
    />
  </div>
</template>

<script>
import DialogForm from '@/components/DialogForm'

export default {
  components: { DialogForm },
  data() {
    return {
      showDialog: false,
      dialogFormOpts: [
        { type: 'Input', label: '名称', prop: 'name' },
        { type: 'DateTimePicker', label: '日期时间', prop: 'dateTime' }
      ],
      dialogForm: {
        name: '',
        dateTime: ''
      }
    }
  },
  methods: {
    confirm(formData) {
      console.log(formData)
      this.showDialog = false
    }
  }
}
</script>
