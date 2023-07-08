export default {
  // 登录接口
  login: '/adminapi/login',

  // 图片上传
  upload: '/adminapi/file/upload',

  ///////////////////////////////////////

  // 商品管理列表接口
  productList: '/adminapi/product/product',

  //商品管理头部菜单搜索
  getMenusList: '/adminapi/menusList',

  //商品管理头部tabs切换
  typeHeader: '/adminapi/product/product/type_header',

  //商品管理开关
  setShow: 'adminapi/product/product/set_show/',

  //商品管理查看详情数据接口
  lookProduct: '/adminapi/product/product/',

  //商品分类搜索接口
  search: '/adminapi/product/category/tree/0',

  //商品分类列表接口
  category: '/adminapi/product/category',

  //商品分类添加上级分类接口
  create: '/adminapi/product/category/create',

  //商品分类开关
  classSetShow: '/adminapi/product/category/set_show/',

  //商品分类图片数据
  file: '/adminapi/file/file',

  //商品规格数据
  attrList: '/adminapi/product/product/rule',

  //////////////////////////////

  replyList: '/adminapi/product/reply',

  // 用户管理列表接口
  UserList: '/adminapi/user/user',

  //头部菜单搜索
  menusList: '/adminapi/menusList',

  //导出
  userDerive: '/adminapi/export/storeOrder',

  //头部tabs切换
  typeHeader: '/adminapi/product/product/type_header',

  //商品开关
  setShow: 'adminapi/product/product/set_show/',

  /* 财务记录 - 佣金记录 */
  // 列表
  commission_list: '/adminapi/finance/finance/commission_list',

  // 用户标签全部数据
  user_label: '/adminapi/user/user_label',

  label_cate: '/adminapi/user/user_label_cate/all',

  // 添加标签
  labelAdd: '/adminapi/user/user_label/add/0',
  // 用户标签-添加标签
  labelSave: '/adminapi/user/user_label/save.html',

  // 编辑
  userLabeAdd: '/adminapi/user/user_label/add',

  // 添加    分类
  cateCreate: '/adminapi/user/user_label_cate/create',
  // 添加分类
  userLabelCate: '/adminapi/user/user_label_cate',

  //用户标签- 删除
  labelDel: '/adminapi/user/user_label/del',
};
