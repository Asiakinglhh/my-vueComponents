import back from './back'
import clipboard from './clipboard'
// import permission from './permission'

export default Vue => {
  Vue.directive('back', back)
  Vue.directive('clipboard', clipboard)
  // Vue.directive('permission', permission)
}