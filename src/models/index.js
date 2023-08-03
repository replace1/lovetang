import api from '@/services';
import { message } from 'antd';
import { history } from 'umi';

// 全局11
export default {
  namespace: 'index',

  state: {
    menus: [],
    token: '',
    userInfo: {},
    derive: '',
    menuList: [], //头部菜单搜索
    cardList: [],
    shopList: [],
    count: 0,
    OderList: [],
    tabs: [],
    herdList: [],
    shopCount: 0,
    texts: [],
    menuList: [],
    data: [],
  },

  reducers: {
    setUserInfo(state, { payload }) {
      const { token, menus, user_info } = payload;
      return {
        ...state,
        menus,
        token,
        userInfo: user_info,
      };
    },
    setDerive(state, { payload }) {
      return {
        ...state,
        derive: payload.data[0],
      };
    },
    setOderList(state, { payload }) {
      return {
        ...state,
        count: payload.data.count,
        OderList: payload.data.data,
        cardList: payload.data.stat,
      };
    },

    setTexts(state, { payload }) {
      return {
        ...state,
        texts: payload,
      };
    },
    setMenuList(state, { payload }) {
      return {
        ...state,
        menuList: payload,
      };
    },
    setShopList(state, { payload }) {
      const { count, list } = payload;
      return {
        ...state,
        shopCount: count,
        shopList: list,
      };
    },
    setTabs(state, { payload }) {
      return {
        ...state,
        tabs: payload,
      };
    },
    setHerdList(state, { payload }) {
      return {
        ...state,
        herdList: payload,
      };
    },
    setTexts(state, { payload }) {
      return {
        ...state,
        texts: payload,
      };
    },
    setMenuList(state, { payload }) {
      return {
        ...state,
        menuList: payload,
      };
    },
    setChart(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
  },

  effects: {
    //头部搜索
    *getMenusList({ payload }, { call, put }) {
      const res = yield call(api.menusList, payload);
      if (res.status == 200) {
        yield put({ type: 'setMenuList', payload: res.data });
      }
    },
  },
};
