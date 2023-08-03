export default [
  //商品
  {
    path: '/admin/product',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/admin/product/product_classify',
        component: './classify',
        title: '商品分类',
      },
      {
        path: '/admin/product/product_reply',
        component: './reply',
        title: '商品规格',
      },
    ],
  },

  // 用户
  {
    path: '/admin/user',
    component: '@/layouts/BasicLayout',
    wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      {
        path: '/admin/user/label',
        component: './label',
        title: '用户标签',
      },
    ],
  },
  //登录
  {
    path: '/admin',
    routes: [{ path: '/admin/login', component: './login', title: '登录页面' }],
  },
];
