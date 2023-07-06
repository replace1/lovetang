import api from '../../../services';
import { history } from 'umi';

export default {
  namespace: 'classify',
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
      const res = yield call(api.categoryList2, payload);
      if (res?.status == 200) {
        yield put({
          type: 'setData',
          payload: res.data.list,
        });
      }
    },
  },
};
