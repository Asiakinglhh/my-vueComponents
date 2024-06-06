import Vue from 'vue'
import './element'
import directives from './directives'
import './components/Graph/register'
import { waterLevelPond, scrollBoard } from '@jiaminghi/data-view'
import App from './App'
import router from './router'

Vue.use(directives)
Vue.use(waterLevelPond)
Vue.use(scrollBoard)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
