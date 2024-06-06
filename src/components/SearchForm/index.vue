<template>
  <el-form
    ref="formRef"
    inline
    inline-message
    :model="formObj"
    :label-width="labelWidth"
    :rules="rules"
    label-suffix=":"
    v-bind="$attrs"
  >
    <el-row>
      <el-col
        v-for="it in formOpts"
        :key="it.prop"
        :xs="24"
        :md="12"
        :xl="8"
      >
        <el-form-item
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
              :key="item. value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-date-picker
            v-else-if="it.type === 'DatePicker'"
            v-model="formObj[it.prop]"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="end"
    >
      <el-button
        type="primary"
        icon="el-icon-search"
        :loading="loading"
        @click="handleSearch"
      >
        查询
      </el-button>
      <el-button
        type="primary"
        plain
        icon="el-icon-refresh"
        @click="$refs.formRef.resetFields(), loading = false"
      >
        重置
      </el-button>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'SearchForm',
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
      default: '160px'
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
    this.formObj = {...this.formData}
  },
  methods: {
    handleSearch() {
      this.loading = true
      this.$emit('onSearch', {...this.formObj}, () => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__content {
  width: 55%;
}
.el-form-item, .el-select, .el-date-editor {
  width:100%;
}
</style>
