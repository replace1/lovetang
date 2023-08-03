import api from '@/services';
import { history } from 'umi';

export default {
  namespace: 'login',
<<<<<<< HEAD

=======
>>>>>>> 3492635df0cfc4886d3f995b0372840d3e2d1a3f
  state: {
    data: [],
  },
  reducers: {
    setData(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
  },
  effects: {
    // 登录
    *fetchLogin({ payload }, { call, put, select }) {
      const res = yield call(api.authlogin2, payload);
      if (res.status == 200) {
        localStorage.setItem('token', res.data.token);
        yield put({
          type: 'setData',
          payload: res.data,
        });
      }
    },
  },
};
