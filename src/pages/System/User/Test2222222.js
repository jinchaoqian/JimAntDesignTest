import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import {
    Form,
    Card,//卡片
    Button,//按钮
    Divider,
    Row,
    Col,//分割线
} from 'antd';
//import styles from './User.less'; 暂时用不到
//表格
import StandardTable from '@/components/StandardTable';//tables
//面包屑
import PageHeaderWrapper from '@/components/PageHeaderWrapper';//面包屑
import FormItem from 'antd/lib/form/FormItem';


@connect( ({ test222, loading }) => ({
    list : test222.data,//请求结果赋值给list
    loading: loading.models.list,
}))


class Test2222222 extends PureComponent {
    state = {
        selectedRows: [],//这个是选中 和反选的 必须有，除非你不用复选框
    };
    //定义列
    columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key:"firstName",
            hidden:true,
        },
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '状态',
            dataIndex: 'status',
        },
        {
            title: '操作',
            render: (text, record) => (
                <Fragment>
                    <Button type="primary">编辑</Button>
                    <Divider type="vertical" />
                    <Button type="danger">删除</Button>
                </Fragment>
            ),
        },
    ];
    //componentDidMount在第一次渲染后调用，只在客户端
    //加载第一页数据， 你们可以把第一页的和以后的整合的一起，用一个方法，我这测试就不整理了
    componentDidMount() {
        const { dispatch } = this.props;
        //参数
        const params = {
           page:1,
           rows:10,
           format:'json'
        };
        dispatch({
            //type: 'test222/fetch',
            type: 'test222/fetch',
            payload: params,
        });
    }
    //什么时候调用可以看着里：http://www.runoob.com/react/react-component-life-cycle.html
    //全选 取消
    handleSelectRows = rows => {
        this.setState({
            selectedRows: rows,
        });
    };
    //翻页
    handleStandardTableChange = (pagination) => {
        const { dispatch } = this.props;
        const params = {
            page : pagination.current,
            rows : pagination.pageSize,
            format:'json'
        };
        dispatch({
            type: 'test222/fetch',
            payload: params,
        });
    };
    render() {
        const{
            list,
            loading,
        } = this.props;
        const { selectedRows } = this.state;
        return (

            <div>
                <div> test1</div>
                <div>
                <PageHeaderWrapper>
                    <Form layout="inline">
                        <FormItem label='测试标签'>

                        </FormItem>
                        <Row>
                            <Col>                            
                                <FormItem label='这个是什么'>
                                    
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                    <Card bordered={true}>
                        <div>
                            <StandardTable
                                rowKey = { list =>  list.id}//这块是默认为key 如果没有key字段必须定义一个字段不然会有错误提示
                                selectedRows={selectedRows}
                                loading={loading}
                                data={list}//数据
                                columns={this.columns}//列
                                onSelectRow={this.handleSelectRows}//选中 取消
                                onChange={this.handleStandardTableChange}//翻页
                            />
                        </div>
                    </Card>
                </PageHeaderWrapper>
                </div>
            </div>
        )
    }
}
export default Test2222222;