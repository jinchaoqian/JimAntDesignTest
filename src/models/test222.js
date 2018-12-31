import { queryGrid } from '@/services/api';
export default {
//命名空间，如果这里面什么不懂 ，可以看上一篇文章
    namespace: 'test222',
    state: {
    //数据结果
        data : [],
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            const response = yield call(queryGrid, payload);
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
                data: action.payload,
            };
        },
    },
};