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
  },

  reducers: {
    // 获取表格数据
    setList(state, { payload }) {
      return {
        ...state,
        data: payload,
        count: payload.length,
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
  },

  effects: {
    //获取表格数据
    *productList({ payload }, { call, put, select }) {
      const res = yield call(api.getProductList, payload);
      // console.log(payload);
      console.log(res.data.list);
      if (res.data) {
        yield put({ type: 'setList', payload: res.data.list });
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
  },
};
