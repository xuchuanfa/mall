import vue from 'vue'
import vueRouter from 'vue-router'

const home = () => import('@/views/home/home')
const category = () => import('@/views/category/category')
const shopcart = () => import('@/views/shopcart/shopcart')
const profile = () => import('@/views/profile/profile')
const detail = () => import('@/views/detail/detail')

//1.安装插件
vue.use(vueRouter)

const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/detail/:iid',
      component: detail
    }
]

//2.创建路由
const router = new vueRouter({
  routes,
  mode: 'history'
})

export default router
