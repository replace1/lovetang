import api from '@/services';
export default {
  namespace: 'reply',

  state: {
    replys: [],
    count: 0,
  },

  reducers: {
    setReplys(state, { payload }) {
      const { list, count } = payload;
      return {
        ...state,
        replys: list,
        count,
      };
    },
  },

  effects: {
    *fetchReplyList({ payload }, { call, put, select }) {
      const res = yield call(api.replyList, payload);
      if (res.status === 200) {
        yield put({
          type: 'setReplys',
          payload: res.data,
        });
      }
    },
  },
};
