import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/Homeview',
      name: 'Homeview',
      component: HomeView,
      meta: {
        title: '首页'
      },
      props:true,
      children:[
        { path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
          meta: {title: '个人信息'}
        },
        {
          path: '/orderview',
          name: 'order',
          component: () => import('../views/OrderView.vue') ,
          meta: {
            title: '订单'
          },
          props:true
        },
        {
          path: '/classifyView',
          name: 'classify',
          component: () => import('../views/ClassifyView.vue'),
          meta: {
            title: '分类'
          },
          props:true
        },{
          path: '/shopCartView',
          name: 'shopCart',
          component: () => import('../views/ShopCartView.vue'),
          meta: {
            title: '购物车'
          },
          props:true
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('../components/Home.vue'),
          meta: {
            title: ''
          },
          props:true
        }

      ]

    },
    {
      path: '/userview',
      name: 'user',
      component: () => import('../views/UserView.vue') ,
      meta: {
        title: '用户登录/注册'
      },
      props:true
    }


  ]
})

export default router
