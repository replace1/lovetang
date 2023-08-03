import request from '@/utils/request';
import api from './api';

export const replyList = (payload) => request.get(api.replyList, payload);
export const replyDel = (payload) =>
  request.del(`/adminapi/product/reply/${payload}`, payload);
export const replyUp = (payload) =>
  request.put(`/adminapi/product/reply/${payload}`, payload);
