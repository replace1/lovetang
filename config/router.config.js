export default [
  //商品
  {
    path: '/admin/product',
<<<<<<< HEAD
<<<<<<< HEAD
    component: '@/layouts/BasicLayout',
    // wrappers: ['@/pages/authorized'], // 路由守卫
    routes: [
      {
        path: '/admin/product/product_reply',
        component: './reply',
        title: '商品规格',
=======
    routes: [
      {
        path: '/admin/product/product_list',
        component: './list',
        title: '商品管理',
      },
      {
        path: '/admin/product/add_product',
        component: './add',
        title: '商品添加',
>>>>>>> d425090bda079b4e32dc20517a240857efc184c9
      },
    ],
  },
  {
<<<<<<< HEAD
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
=======
    path: '/admin',
    component: '@/layouts/BasicLayout',
    routes: [{ path: '/admin/login', component: './login', title: '首页' }],
  },
  // 路由前端给后台
  // {
  //   path: '/user',
  //   component: '@/layouts/BasicLayout',
  //   wrappers: ['@/pages/authorized'], // 路由守卫
  //   routes: [
  //     { path: '/user/orderManagement', component: './orderManagement', title: '订单管理' },
  //   ],
  // },
>>>>>>> d425090bda079b4e32dc20517a240857efc184c9
=======
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
>>>>>>> 3492635df0cfc4886d3f995b0372840d3e2d1a3f
];
