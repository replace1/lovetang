import request from '../utils/request';
import api from './api';

export const getProductList = (payload) =>
  request.get(
    `http://www.lovetang.top/adminapi/product/product?page=${payload.page}&limit=${payload.limit}&cate_id=${payload.cate_id}&type=${payload.type}&store_name=${payload.store_name}&excel=${payload.excel}`,
    payload,
  );
