export default [
  // 路由前端给后台
  {
    path: '/admin/product',
    component: '@/layouts/BasicLayout',
    // wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      {
        path: '/admin/product/product_classify',
        component: './classify',
        title: '商品管理',
      },
    ],
  },
  {
    path: '/admin',
    routes: [{ path: '/admin/login', component: './login', title: '登录' }],
  },
];
