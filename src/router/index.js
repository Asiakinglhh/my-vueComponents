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
    component: () => import('@/views/HomePage')
  },
  {
    path: '/visualchart',
    component: () => import('@/views/VisualChart')
  },
  {
    path: '/sqleditor',
    component: () => import('@/views/SqlEditor')
  },
  {
    path: '/dialogform',
    component: () => import('@/views/DialogFormPage')
  },
  {
    path: '/luckysheet',
    component: () => import('@/views/LuckySheetPage')
  },
  {
    path: '/searchform',
    component: () => import('@/views/SearchFormPage')
  },
  {
    path: '/pagintable',
    component: () => import('@/views/PaginTable')
  },
  {
    path: '/dagchart',
    component: () => import('@/views/DagChart')
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