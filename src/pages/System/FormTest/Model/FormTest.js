import { query  } from './Services/FormTest';

export default {
  namespace: 'formTest',

  state: {
    data: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(query);
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
        data: action.payload || {},
      };
    },
  },
};
