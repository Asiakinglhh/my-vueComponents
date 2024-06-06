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
    <el-card>
      <SearchForm
        :form-opts="formOpts"
        :form-data="formData"
        @onSearch="search"
      />
    </el-card>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'

export default {
  name: 'SearchFormPage',
  components: { SearchForm },
  data() {
    return {
      formOpts: [
        { type: 'Input', label: '名称1', prop: 'text1' },
        { type: 'Select', label: '名称2', prop: 'select1', option: [] },
        { type: 'DatePicker', label: '日期', prop: 'date' }
      ],
      formData: {
        text1: '',
        select1: '',
        date: ''
      }
    }
  },
  methods: {
    search(formData, callback) {
      try {
        console.log(formData);
      } catch (error) {
        throw new Error(error)
      } finally {
        callback()
      }
    }
  }
}
</script>
