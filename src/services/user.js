import request from '@/utils/request';
import api from './api';

/* 用户操作 - 用户标签 */
export const userLabel = (payload) => request.get(api.user_label, payload);
export const labelCate = (payload) => request.get(api.label_cate, payload);
// 删除
export const labelDel = (payload) => request.del(`${api.labelDel}/${payload}`);
// 添加标签
export const labelAdd = (payload) => request.get(api.labelAdd, payload);
// 用户添加标签
export const labelSave = (payload) => request.post(api.labelSave, payload);
// 编辑
export const userLabeAdd = (payload) =>
  request.get(`${api.userLabeAdd}/${payload}`);

// 添加  分类
export const cateCreate = (payload) => request.get(api.cateCreate, payload);
// 添加分类
export const userLabelCate = (payload) =>
  request.post(api.userLabelCate, payload);
