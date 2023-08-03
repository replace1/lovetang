import api from '@/services';
import request from '../../../utils/request';
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
    *fetchReplyDel({ payload }, { call, put, select }) {
      const res = yield call(api.replyDel, payload);
      if (res.status === 200) {
        yield put({
          type: 'fetchReplyList',
          payload: {
            page: 1,
            limit: 5,
            key: '',
            order: '',
            is_reply: '',
            data: '',
            store_name: '',
            account: '',
            product_id: 0,
          },
        });
      }
    },
  },
};
