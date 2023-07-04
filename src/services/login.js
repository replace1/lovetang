import request from '@/utils/request';
import api from './api';

// 登录
export const authlogin2 = (payload) => request.post(api.login1, payload);
