import _ from 'lodash';
import axios from 'axios';
import qs from 'qs';
import api from '@/services';
import { history } from 'umi';

export default {
  // 名字 必须唯一, 跟目录名起
  namespace: 'list',

  state: {
    // 表单回填
    data: null,
    setStore_name: '',
    cate_id: '',
    type: 1,
    count: null,
    detail: null,
    count1: null, //出售中的商品数据
    count2: null, //仓库中商品条数
    count3: null, //已售罄商品条数
    count5: null, //警戒库存商品条数
    count6: null, //回收站商品条数
  },

  reducers: {
    // 获取表格数据
    setList(state, { payload }) {
      return {
        ...state,
        data: payload.data.list,
        count: payload.data.count,
      };
    },
    //获取搜索名字
    setStoreName(state, { payload }) {
      return {
        ...state,
        setStore_name: payload,
      };
    },
    setCateId(state, { payload }) {
      return {
        ...state,
        cate_id: payload,
      };
    },
    setType(state, { payload }) {
      return {
        ...state,
        type: payload,
      };
    },
    setDetails(state, { payload }) {
      return {
        ...state,
        detail: payload,
      };
    },
    setCount2(state, { payload }) {
      return {
        ...state,
        count2: payload.length,
      };
    },
    setCount1(state, { payload }) {
      return {
        ...state,
        count1: payload.length,
      };
    },
    setCount3(state, { payload }) {
      return {
        ...state,
        count3: payload.length,
      };
    },
    setCount5(state, { payload }) {
      return {
        ...state,
        count5: payload.length,
      };
    },
    setCount6(state, { payload }) {
      return {
        ...state,
        count6: payload.length,
      };
    },
  },
  effects: {
    //获取表格数据
    *productList({ payload }, { call, put, select }) {
      const res = yield call(api.getProductList, payload);
      if (res?.data) {
        yield put({ type: 'setList', payload: res });
      }
    },
    //获取搜索名字
    *StoreName({ payload }, { call, put, select }) {
      yield put({ type: 'setStoreName', payload: payload });
    },
    //获取搜索id
    *CateId({ payload }, { call, put, select }) {
      yield put({ type: 'setCateId', payload: payload });
    },
    //获取表格type
    *Type({ payload }, { call, put, select }) {
      yield put({ type: 'setType', payload: payload });
    },
    //获取详情数据
    *Details({ payload }, { call, put, select }) {
      const res = yield call(api.getDetails, payload);
      // console.log(res);
      if (res?.data) {
        yield put({ type: 'setDetails', payload: res.data.productInfo });
      }
    },
    //删除商品
    *Del({ payload }, { call, put, select }) {
      const res = yield call(api.getDel, payload);
      if (res?.data) {
        return res;
      }
    },
    //恢复商品
    *Renew({ payload }, { call, put, select }) {
      const res = yield call(api.getRenew, payload);
      console.log(res);
    },
    *getCount1({ payload }, { call, put, select }) {
      const res = yield call(api.getProductList, payload);
      if (res?.data) {
        yield put({ type: 'setCount1', payload: res.data.list });
      }
    },
    *getCount2({ payload }, { call, put, select }) {
      const res = yield call(api.getProductList, payload);
      if (res?.data) {
        yield put({ type: 'setCount2', payload: res.data.list });
      }
    },
    *getCount3({ payload }, { call, put, select }) {
      const res = yield call(api.getProductList, payload);
      if (res?.data) {
        yield put({ type: 'setCount3', payload: res.data.list });
      }
    },
    *getCount5({ payload }, { call, put, select }) {
      const res = yield call(api.getProductList, payload);
      if (res?.data) {
        yield put({ type: 'setCount5', payload: res.data.list });
      }
    },
    *getCount6({ payload }, { call, put, select }) {
      const res = yield call(api.getProductList, payload);
      if (res?.data) {
        yield put({ type: 'setCount6', payload: res.data.list });
      }
    },
    //批量删除
    *getUnShow({ payload }, { call, put, select }) {
      const res = yield call(api.getUnShow, payload);
      console.log(res);
    },
  },
};
