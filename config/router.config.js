export default [
  {
    path: '/admin/product',
    component: '@/layouts/BasicLayout',
    // wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      {
        path: '/admin/product/product_reply',
        component: './reply',
        title: '商品规格',
      },
    ],
  },
  {
    path: '/admin/user',
    component: '@/layouts/BasicLayout',
    // wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      {
        path: '/admin/user/label',
        component: './label',
        title: '用户标签',
      },
    ],
  },
];
