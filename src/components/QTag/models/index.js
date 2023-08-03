import api from '@/services';

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

  effects: {
    *getTag(payload, { call, put }) {
      console.log(payload);
      yield put({
        type: 'setTag',
        payload,
      });
    },
  },
};
