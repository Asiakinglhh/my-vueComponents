import Vue from 'vue'

import {
  Descriptions,
  DescriptionsItem,
  Pagination,
  Dialog,
  Table,
  TableColumn,
  DatePicker,
  Input,
  Select,
  Option,
  Button,
  Form,
  FormItem,
  Row,
  Col,
  Card,
  Loading,
  Icon,
  Dropdown,
  Tooltip
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small' }

Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(Tooltip)

Vue.use(Loading.directive)
