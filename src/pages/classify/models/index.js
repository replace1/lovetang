import api from '@/services';
import { message } from 'antd';

export default {
  namespace: 'classify',
  state: {
    data: [],
    page: [],
    pone: [],
    imgLeft: [],
    imgData: [],
  },
  reducers: {
    setData(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
    PageData(state, { payload }) {
      return {
        ...state,
        page: payload,
      };
    },
    PoneData(state, { payload }) {
      return {
        ...state,
        pone: payload,
      };
    },
    ImgText(state, { payload }) {
      return {
        ...state,
        imgLeft: payload,
      };
    },
    ImgRight(state, { payload }) {
      return {
        ...state,
        imgData: payload,
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
    //商品分类——下拉框
    *feelPage({ payload }, { call, put, select }) {
      const res = yield call(api.categoryTree, payload);
      if (res.status == 200) {
        yield put({
          type: 'PageData',
          payload: res.data,
        });
      }
    },
    *ponePage({ payload }, { call, put, select }) {
      const res = yield call(api.create2, payload);
      if (res.status == 200) {
        yield put({
          type: 'PoneData',
          payload: res.data,
        });
      }
    },

    //图片接口
    *ImgPage({ payload }, { call, put, select }) {
      const res = yield call(api.fileCategory2, payload);
      console.log(res);

      // if (res?.status == 200) {
      //   yield put({
      //     type: 'setData',
      //     payload: res.data.list,
      //   });
      // }
    },
    *ImgFund({ payload }, { call, put, select }) {
      const res = yield call(api.fileFile2, payload);
      console.log(res);

      // if (res?.status == 200) {
      //   yield put({
      //     type: 'setData',
      //     payload: res.data.list,
      //   });
      // }
    },
  },
};
