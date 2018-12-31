import React, { PureComponent } from 'react';

//import styles from './User.less'; 暂时用不到


//这里connect如果请求接口 必须要！
import { connect } from 'dva';
//import styles from './User.less'; 暂时用不到
//这块是使用connt获取数据的应该 不知道理解对不对
@connect( test  => ({ test, loading }) => ({
//这行是把返回的数据test.data给了test
    test : test.data,
    loading: loading.models.list,
}))

class User extends PureComponent {
    state = {
        user_name:'',
        code:'',
        url:'',
      };

    componentDidMount() {
        const { dispatch } = this.props;
        //要传递的参数
        const params = {
            aa:1,
            format:'json'
        };
        //分发
        dispatch({
        //test是命名空间 fetch是其中的方法
            type: 'test/fetch',
            //这里就是上边的参数
            payload: params,
        });
    }


    render() {
        
        //获取接口数据
        //   const { user_name , code , url } = this.props.user;
        //   console.log(this.props.user);



        return (
            <div>
                HELLO WORD!                
                <div>
                    <h2>HELLO WORD!</h2>
                    <h2>用户名：{this.state.user_name}</h2>
                    <h2>状态：{this.state.code}</h2>
                    <a href={ this.state.url } target="_blank">博客链接：{ this.state.url }</a>
                </div>
            </div>
        )
    }
}

export default User;