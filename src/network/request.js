// 因为package.json中默认的type类型为commonjs，因此想使用ES6模块语法则需要将type设置为module
// import axios from 'axios'
// 故在此使用require导入模块
const axios = require('axios')

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2. axios拦截器
  // 2.1 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  // 2.2 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  // 3. 真正的请求
  return instance(config)
}