export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', component: './login', title: '首页' },
    ]
  },

  // 路由前端给后台
  {
    path: '/user',
    component: '@/layouts/BasicLayout',
    wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      { path: '/user/orderManagement', component: './orderManagement', title: '订单管理' },
    ],
  },
]
