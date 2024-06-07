import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/',
    redirect: 'homepage'
  },
  {
    path: '/homepage',
    component: () => import('@/views/HomePage'),
    meta: { title: '首页' }
  },
  {
    path: '/visualchart',
    component: () => import('@/views/VisualChart'),
    meta: { title: '饼图' }
  },
  {
    path: '/sqleditor',
    component: () => import('@/views/SqlEditor'),
    meta: { title: 'sql编辑器' }
  },
  {
    path: '/dialogform',
    component: () => import('@/views/DialogFormPage'),
    meta: { title: '弹窗表单' }
  },
  {
    path: '/luckysheet',
    component: () => import('@/views/LuckySheetPage'),
    meta: { title: 'luckysheet' }
  },
  {
    path: '/searchform',
    component: () => import('@/views/SearchFormPage'),
    meta: { title: '查询表单' }
  },
  {
    path: '/pagintable',
    component: () => import('@/views/PaginTable'),
    meta: { title: '带分页表格' }
  },
  {
    path: '/dagchart',
    component: () => import('@/views/DagChart'),
    meta: { title: 'Dag图' }
  },
  {
    path: '/waterpond',
    component: () => import('@/views/WaterPond'),
    meta: { title: '水位图' }
  },
  {
    path: '/scrollboard',
    component: () => import('@/views/ScrollBoardPage'),
    meta: { title: '滚动列表' }
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
