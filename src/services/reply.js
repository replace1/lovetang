import request from '@/utils/request';
import api from './api';

export const replyList = (payload) => request.get(api.replyList, payload);
export const replyDel = (payload) => request.delete(api.replyDel, payload);
