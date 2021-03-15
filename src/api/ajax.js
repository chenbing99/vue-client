import axios from 'axios'
const service = axios.create({
    baseURL:'http://39.98.123.211/api',//基础路径,可以理解是所有接口路径公共的部分
    timeout:20000,//超时20s还没有请求成功就报timeout
})
// 请求拦截器
service.interceptors.request.use(function (config) {
    // 添加进度条信息 nprogress
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
// 响应拦截器
service.interceptors.response.use(function (response) {
    // 关闭进度条信息
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default service 