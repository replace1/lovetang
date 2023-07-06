import request from '@/utils/request';
import api from './api';

// 登录
export const authlogin2 = (payload) => request.post(api.login1, payload);

// 商品分类表格数据
export const categoryList2 = (payload) =>
  request.get(
    `/adminapi/product/category?pid=${payload.pid}&is_show=${payload.is_show}&page=${payload.page}&cate_name=${payload.cate_name}&limit=${payload.limit}`,
  );
