import { getUserList } from '../Services/SystemUser';
import { stringify } from 'querystring';
export default {
//命名空间，如果这里面什么不懂 ，可以看上一篇文章
    namespace: 'systemuser',
    state: {
    //数据结果
         data : [],
    },
    effects: {
        *fetchUserList({ payload }, { call, put }) {
            const response = yield call(getUserList, payload);
            yield put({
                type: 'saveUserList',
                payload: response,
            });
        },
    },
    reducers: {
        saveUserList(state, action) {
            console.log("reducers：saveUserList");
            console.log(stringify(action.payload));
            return {
                ...state,
                ...action.payload,
                
            };
        },
    },
};