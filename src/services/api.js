export default {
  // 登录接口
  login: '/adminapi/login',

  // 图片上传
  upload: '/adminapi/file/upload',

  ///////////////////////////////////////
  //商品模块接口

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

  //商品评论表格数据
  replyList: '/adminapi/product/reply',

  //////////////////////////////

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

  //卡片接口
  getCard: '/adminapi/order/list',

  //订单用户列表
  getOderList: '/adminapi/order/list',

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 财务模块 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  /* 财务操作 - 提现申请 */
  // 列表
  extract: '/adminapi/finance/extract',

  /* 财务操作 - 发票管理 */
  // 列表
  invoice_list: '/adminapi/order/invoice/list',

  /* 财务记录 - 充值记录 */
  // 列表
  recharge_list: '/adminapi/finance/recharge',
  // 卡片列表
  recharge_card_list: '/adminapi/finance/recharge/user_recharge',
  // 删除
  recharge_del: '/adminapi/finance/recharge',

  /* 财务记录 - 资金记录 */
  // 列表
  bill: '/adminapi/finance/finance/list',

  /* 财务记录 - 佣金记录 */
  // 列表
  commission_list: '/adminapi/finance/finance/commission_list',

  //用户分组 列表
  userGroup: '/adminapi/user/user_group/list',
  // 删除
  userGroupDel: '/adminapi/user/user_group/del',
  // 添加
  user_group: '/adminapi/user/user_group/save.html',
  // 修改
  groupAdd: '/adminapi/user/user_group/add',

  vip_list: '/adminapi/user/user_level/vip_list',
  userGroupList: '/adminapi/user/user_group/list',
  userLabel: 'adminapi/user/user_label',

  // 用户管理 全部数据
  useradminapi: '/adminapi/user/user',

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

  //订单接口
  chart: '/adminapi/order/chart',

  // 用户等级接口
  userGrade: '/adminapi/user/user_level/vip_list',

  // 用户等级开关接口
  userGradeSwitch: 'adminapi/user/user_level/set_show',

  // 用户等级获取详情
  create_info: '/adminapi/user/user_level/create',

  // 会员等级处添加接口
  userAddList: '/adminapi/user/user_level.html',

  // 会员等级处删除接口
  userDelList: '/adminapi/user/user_level/delete',
  //文章分类列表数据
  flList: '/adminapi/cms/category',

  //switch
  getSwitch: 'adminapi/cms/category/set_status',

  //删除
  getDel: 'adminapi/cms/category',

  //文章分类图片上传
  getUpload: '/adminapi/file/upload',

  //文章分类添加
  getAdd: '/adminapi/cms/category.html',

  //文章select
  getSelect: '/adminapi/cms/category',

  //数据回显
  getEnit: '/adminapi/cms/category',

  //编辑修改
  getXiu: '/adminapi/cms/category',
  // 文章管理
  cmsCms: '/adminapi/cms/cms',
  delCms: '/adminapi/cms/cms',

  // 编辑

  //收银订单
  YOrder: 'order/scan_list',

  // 文章管理-文章分类下拉框
  cmsCategory: '/adminapi/cms/category',

  //查看收款二维码
  getEr: `/adminapi/order/offline_scan`,

  //佣金记录导出
  getDao: `/adminapi/export/userCommission`,

  //售后订单列表
  getRefund: `/adminapi/refund/list`,
};
