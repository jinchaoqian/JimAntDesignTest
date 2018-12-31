
//这块的queryTest是下边的方法的实现，有几个写几个用，分割哦！
import { queryTest } from '@/services/api';
import { stringify } from 'querystring';

export default {
    namespace: 'test',
    state: {
    //用来保存数据
        data : [],
    },
    effects: {
    //方法实现
    //payload 请求的参数
        *fetch({ payload }, { call, put }) {
            const response = yield call(queryTest, payload);
            yield put({
            //回调的方法 save
                type: 'save',
                payload: response,
            });
        },
    },
    reducers: {
    //这块应该是回调
        save(state, {payload}) {
            // alert(stringify(state));
            // alert(stringify(action.payload));
            return {
                ...state,
                ...payload,
            };
        },
        // save(state, action) {
        //     // alert(stringify(state));
        //     // alert(stringify(action.payload));
        //     return {
        //         ...state,
        //         ...action.payload,
        //     };
        // },
    },
};