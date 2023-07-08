export default [
  //商品
  {
<<<<<<< HEAD
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [{ path: '/', component: './login', title: '首页' }],
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
=======
    path: '/admin/product',
    routes: [
      {
        path: '/admin/product/product_classify',
        component: './classify',
        title: '商品分类',
      },
    ],
  },
  //登录
  {
    path: '/admin',
    component: '@/layouts/BasicLayout',
    routes: [{ path: '/admin/login', component: './login', title: '登录页面' }],
  },
>>>>>>> zjb
];
