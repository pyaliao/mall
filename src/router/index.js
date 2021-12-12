import Vue from 'vue'
import VueRouter from 'vue-router'

// 动态加载组件
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

// 1. 注册vue-router
Vue.use(VueRouter)

// 2. 创建vue-router实例
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail,
    props: true //路由组件传参，将动态路由参数iid直接传递给Detail组件的props属性iid
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出router对象
export default router
