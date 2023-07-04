import api from '@/services';
import { message } from 'antd';
import { history } from 'umi';

export default {
  namespace: 'index',

  state: {
    menuList: [], //头部菜单搜索
  },

  reducers: {
    setMenuList(state, { payload }) {
      return {
        ...state,
        menuList: payload,
      };
    },
    setMenuList(state, { payload }) {
      return {
        ...state,
        menuList: payload,
      };
    },
  },

  effects: {
    //头部搜索
    *getMenusList({ payload }, { call, put }) {
      const res = yield call(api.getMenusList, payload);
      if (res.status == 200) {
        yield put({ type: 'setMenuList', payload: res.data });
      }
    },
  },
};
