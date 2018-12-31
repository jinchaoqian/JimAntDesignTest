import { query as queryHello,queryCurrent } from '@/services/hello';

export default {
  namespace: 'hello',

  state: {
    hello: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        hello: action.payload || {},
      };
    },
  },
};
