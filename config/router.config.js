export default [
  //商品
  {
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
];
