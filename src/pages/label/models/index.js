import api from '@/services';
import { message } from 'antd';
import { history } from 'umi';

export default {
  namespace: 'label',

  state: {
    // 用户标签
    getUserLabelList: [],
    labelCount: 0,
    getAddList: [],
  },

  reducers: {
    //用户标签
    getLabelList(state, { payload }) {
      const { count, list } = payload;
      return {
        ...state,
        getUserLabelList: list,
        labelCount: count,
      };
    },
    // 标签
    getlabelCateList(state, { payload }) {
      return {
        ...state,
        getlabelCate: payload,
      };
    },
    // 用户标签---添加
    getAddList(state, { payload }) {
      return {
        ...state,
        getAddList: payload.options,
      };
    },
  },

  effects: {
    //用户标签 全部列表数据获取
    *getUserLabel({ payload }, { call, put }) {
      const res = yield call(api.userLabel, payload);
      if (res.msg === 'ok') {
        yield put({
          type: 'getLabelList',
          payload: res.data,
        });
      }
    },
    // 标签
    *getLabelCate({ payload }, { call, put }) {
      const res = yield call(api.labelCate, payload);
      if (res.msg === 'ok') {
        yield put({
          type: 'getlabelCateList',
          payload: res.data,
        });
      }
    },
    // 添加
    *getlabelAdd({ payload }, { call, put }) {
      const res = yield call(api.labelAdd, payload);
      if (res.msg === 'ok') {
        yield put({
          type: 'getAddList',
          payload: res.data.rules[0],
        });
      }
    },

    // 添加标签
    *getlabelSave({ payload }, { call, put }) {
      const res = yield call(api.labelSave, payload);
      if (res.status == 200) {
        message.success({
          content: res.msg,
          duration: 0.5,
        });
      }
    },

    *userLabeAdd({ payload }, { call, put }) {
      const res = yield call(api.userLabeAdd, payload);
      console.log(res);

      if (res.status == 200) {
        yield put({
          type: 'getlabelCateList',
          payload: res.data,
        });
      }
    },

    // 添加  分类
    *cateCreate({ payload }, { call, put }) {
      const res = yield call(api.cateCreate, payload);
    },
    // 添加分类
    *userLabelCate({ payload }, { call, put }) {
      const res = yield call(api.userLabelCate, payload);
      if (res.status == 200) {
        message.success({
          content: res.msg,
          duration: 0.5,
        });
      } else {
        message.error({
          content: res.msg,
          duration: 0.5,
        });
      }
    },

    // 删除
    *getLabelDel({ payload }, { call, put }) {
      const res = yield call(api.labelDel, payload);
      if (res) {
        message.success({
          content: res.msg,
          duration: 0.5,
        });
      }
    },
  },
};
