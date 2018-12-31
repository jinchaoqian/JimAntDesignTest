import { stringify } from 'qs';
import request from '@/utils/request';

//get请求
export async function getUserList(params) {
    //接口地址和参数应该可以一目了然了吧！
  return request(`/server/api/getUserList?${stringify(params)}`);
  }
  
  
  //post请求
  export async function getUserList11(params) {
   return request('/server/api/getUserList', {
     method: 'POST',
     body: params,
   });
  }