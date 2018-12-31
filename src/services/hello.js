import request from '@/utils/request';

export async function query() {
  return request('/api/hello');
}

export async function queryCurrent() {
  return request('http://localhost:2440/api/hello?name=111',mode="cors");
}
