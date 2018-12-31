import request from '@/utils/request';

//get请求
export async function query(params) {
    //接口地址和参数应该可以一目了然了吧！
    return request(`/server/api/test222?${stringify(params)}`);
  
  }

//post请求
// export async function query(params) {
//  return request('/server/api/getUserName', {
//    method: 'POST',
//    body: params,
//  });
// }
