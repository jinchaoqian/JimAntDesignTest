import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import router from 'umi/router';
import { Form, Input, Button, Select, Row, Col, Popover, Progress } from 'antd';
import styles from './NewPage.less';
import { Alert } from 'antd';
import ImageWrapper from '@/components/ImageWrapper';  // @ 表示相对于源文件根目录
import axios from 'axios'

import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

// @connect(({ loading, hello, project }) => ({
//     helloLoading: loading.effects['hello/fetch'],
//     currentHello: hello.value,
//     currentHelloLoading: loading.effects['hello/fetchCurrent'],
//   }))

class NewPage extends Component {
    state = {
        value:'',
        price:'',
        img:'',
        value1: 'test',
        name:''
      };

      handleChange = (value1) => {
        this.setState({
          value1,
        })
      };
    
      prompt = () => {
        notification.open({
          message: 'We got value:',
          description:<span dangerouslySetInnerHTML={{ __html: this.state.value1 }}></span>,    
        });
      };


    componentDidMount() {
        let api = "http://localhost:2440/api/hello?name=111";
        axios.get(api)
            .then((response)=>{
                // console.log(response.data.result)
                this.setState({
         
                    value:response.data.value,
                    price:response.data.price,
                    img:response.data.img
         
                })
            }).catch(function (error) {
            console.log(error);
        });

        dispatch({type:'hello/fetchCurrent',payload:value});
        // fetchCurrent
        // const { dispatch } = this.props;
        // dispatch({
        //   type: 'hello/fetchCurrent',
        // });
      }

      
    render() {       
    return (
        <div>
        <ReactQuill value={this.state.value1} onChange={this.handleChange} />
        <Button style={{ marginTop: 16 }} onClick={this.prompt}>Prompt</Button>


            test
            <ImageWrapper
                src={this.state.img}
                desc={this.state.value}
                price={this.state.price}
                saleoff= "80%"
            />

            <div>{this.state.name}</div>
        </div>            
        );
    }

}


export default NewPage;
