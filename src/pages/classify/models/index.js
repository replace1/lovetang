import api from '@/services';
import { message } from 'antd';

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
    // 获取表格数据
    *fetchLogin({ payload }, { call, put, select }) {
      const res = yield call(api.categoryList2, payload);
      if (res?.status == 200) {
        yield put({
          type: 'setData',
          payload: res.data.list,
        });
      }
    },

    // 点击显示隐藏
    *setShow({ payload }, { call, put, select }) {
      const res = yield call(api.setShow2, payload);
      if (res?.status == 200) {
        message.success({
          content: res.msg,
        });
        yield put({
          type: 'fetchLogin',
          payload: {
            pid: '',
            is_show: '',
            page: 1,
            cate_name: '',
            limit: 15,
          },
        });
      }
    },

    // 商品分类 (点击搜索)
    *cateGory({ payload }, { call, put, select }) {
      const res = yield call(api.category4, payload);
      if (res?.status == 200) {
        yield put({
          type: 'setData',
          payload: res.data.list,
        });
      }
    },

    //商品删除
    *pathehone({ payload }, { call, put, select }) {
      const res = yield call(api.categorySea, payload);
      if (res?.status == 200 || res?.status == 400) {
        message.success({
          content: res.msg,
        });
        yield put({
          type: 'fetchLogin',
          payload: {
            pid: '',
            is_show: '',
            page: 1,
            cate_name: '',
            limit: 15,
          },
        });
      }
    },
  },
};
