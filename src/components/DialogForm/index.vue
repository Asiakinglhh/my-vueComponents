<template>
  <el-dialog
    v-bind="$attrs"
    @close="handleClose"
  >
    <el-form
      ref="formRef"
      :model="formObj"
      :label-width="labelWidth"
      :rules="rules"
      label-suffix=":"
    >
      <el-form-item
        v-for="it in formOpts"
        :key="it.prop"
        :label="it.label"
        :prop="it.prop"
      >
        <el-input
          v-if="it.type === 'Input'"
          v-model="formObj[it.prop]"
          :placeholder="it.placeholder"
          :disabled="it.disabled"
          clearable
        />
        <el-select
          v-else-if="it.type === 'Select'"
          v-model="formObj[it.prop]"
          :placeholder="it.placeholder"
          :multiple="it.multiple"
          :disabled="it.disabled"
          filterable
          clearable
        >
          <el-option
            v-for="item in it.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-date-picker
          v-else-if="it.type === 'DatePicker'"
          v-model="formObj[it.prop]"
        />
        <el-date-picker
          v-else-if="it.type === 'DateTimePicker'"
          v-model="formObj[it.prop]"
          type="datetime"
        />
      </el-form-item>
    </el-form>
    <template slot="footer">
      <el-button
        type="primary"
        :loading="loading"
        @click="handleConfirm"
      >
        确定
      </el-button>
      <el-button @click="handleClose">
        取消
      </el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogForm',
  props: {
    formOpts: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => ({})
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      formObj: undefined,
      loading: false
    }
  },
  created() {
    this.formObj = { ...this.formData }
  },
  methods: {
    handleConfirm() {
      this.loading = true
      this.$emit('onConfirm', { ...this.formObj })
    },
    handleClose() {
      this.$emit('onCancel')
      this.$refs.formRef.resetFields()
      this.loading = false
    }
  }
}
</script>

<style scoped>
.el-select, .el-date-editor {
  width: 100%;
}
</style>
