export default [
  {
    path: '/admin',
    component: '@/layouts/BasicLayout',
    routes: [{ path: '/admin/login', component: './login', title: '登录页面' }],
  },

  // 路由前端给后台
  {
    path: '/user',
    component: '@/layouts/BasicLayout',
    wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      {
        path: '/user/orderManagement',
        component: './orderManagement',
        title: '订单管理',
      },
    ],
  },
];
