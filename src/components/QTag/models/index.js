import api from '@/services';
import { message } from 'antd';
import { history } from 'umi';

export default {
  namespace: 'QTag',

  state: {
    tag: [],
  },

  reducers: {
    setTag(state, { payload }) {
      return {
        ...state,
        tag: payload,
      };
    },
  },

  effects: {},
};
