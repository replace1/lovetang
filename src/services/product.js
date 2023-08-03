import request from '../utils/request';
import api from './api';

//获取表格数据
export const getProductList = (payload) =>
  request.get(
    `/adminapi/product/product?page=${payload.page}&limit=${payload.limit}&cate_id=${payload.cate_id}&type=${payload.type}&store_name=${payload.store_name}&excel=${payload.excel}`,
    payload,
  );

//获取详情
export const getDetails = (payload) =>
  request.get(`adminapi/product/product/${payload}`);

//删除
export const getDel = (payload) =>
  request.del(`adminapi/product/product/${payload}`);
//恢复商品
export const getRenew = (payload) =>
  request.get(`/adminapi/product/product/${payload}`);

//批量下架
export const getUnShow = (payload) => request.put(api.unShow, payload);
