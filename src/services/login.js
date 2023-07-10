import request from '@/utils/request';
import api from './api';

// 登录
export const authlogin2 = (payload) => request.post(api.login1, payload);

// 商品分类表格数据
export const categoryList2 = (payload) =>
  request.get(
    `/adminapi/product/category?pid=${payload.pid}&is_show=${payload.is_show}&page=${payload.page}&cate_name=${payload.cate_name}&limit=${payload.limit}`,
  );

//点击显示隐藏
export const setShow2 = (payload) =>
  request.put(
    `/adminapi/product/category/set_show/${payload.id}/${payload.show}`,
    payload,
  );

//商品分类 (点击搜索)
// category3
export const category4 = (payload) => request.get(api.category3, payload);

//删除
export const categorySea = (payload) =>
  request.del(`/adminapi/product/category/${payload}`, payload);
