import React, { PureComponent } from 'react';
//这里connect如果请求接口 必须要！
import { connect } from 'dva';
import { stringify } from 'querystring';
//引用自定义的组件
import ImageWrapper from '@/components/ImageWrapper';  // @ 表示相对于源文件根目录

//import styles from './User.less'; 暂时用不到
//这块是使用connt获取数据的应该 不知道理解对不对


//调用API的方式，test为model里面定义的类型，loading暂时未知
@connect( ({ test, loading } )=> ({
    //这行是把返回的数据test.data给了test
    test ,
    loading: loading.models.list,
}))


class Test extends PureComponent {
    //componentWillMount 在渲染前调用,在客户端也在服务端。 
    componentWillMount(){
        // console.log('渲染前调用');
        // alert("渲染前调用");
    }
    //componentDidMount在第一次渲染后调用，只在客户端。 
    componentDidMount() {
        const { dispatch } = this.props;
        //分发
        dispatch({
        //test是命名空间 fetch是其中的方法
            type: 'test/fetch',
            //传递的参数
            payload:  {
                aa:1,
                format:'json',
            },
        });
    }
    render() {
            //获取API调用的结果
            const { test, loading } = this.props;
            console.log(stringify(test))
            const { user_name, code,url } = test;

            return (
                <div>
                    <h2>HELLO WORD!</h2>
                    <h2>用户名：{user_name}</h2>
                    <h2>用户名：{code}</h2>
                    <a href={ url } target="_blank">博客链接：{ url }</a>

                    <ImageWrapper
                        src={url}
                        desc={user_name}
                        price={code}
                        saleoff= "80%"
                    />
                </div>
            )
        }
    }
    export default Test;