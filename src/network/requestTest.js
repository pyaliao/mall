// 因为package.json中默认的type类型为commonjs，因此想使用ES6模块语法则需要将type设置为module
// import axios from 'axios'
// 故在此使用require导入模块
const axios = require('axios')

// axios的通用方法axios(config)或axios(url[, config])两种调用方法
// config是一个对象，url是一个字符串
// 默认使用get请求
const axiosGet1 =  axios({
  url: 'http://123.207.32.32:8000/home/multidata'
})
// const axiosPost = axios({
//   method: 'post',
//   url: 'http://123.207.32.32:8000/home/multidata'
// })

// axios全局的静态请求方法的别名
// axios(config) // 最原始的方法
// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head((url[, config]))
// axios.options((url[, config]))
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])

// axios发送并发请求
const axiosAll = axios.all([
  axios.get('http://123.207.32.32:8000/home/multidata'),
  axios.get('http://123.207.32.32:8000/home/data', {
    params: {
      type: 'sell',
      page: 5
    }
  }), 
])

// axios实例的config配置
// 1. 可以读取全局默认配置，lib/defaults.js
// 2. 可以进行实例配置，axios.create(config)创建一个实例，然后使用instance.defaults.attr进行实例配置
// 3. 可以在给实例方法传递config参数时进行配置
// 4. 这三种配置将进行合并，合并的优先级是config参数最高，其次是实例配置，其次是创建实例的config，其次是lib/defaults.js的值
const instance = axios.create({
  timeout: 2500
})
instance.defaults.timeout = 3500
const axiosGet2 = instance.get('http://123.207.32.32:8000/home/multidata', {
  timeout: 4000
})
// axios全局的config配置
axios.defaults.timeout = 2500
const axiosGet3 = axios.get('http://123.207.32.32:8000/home/multidata', {
  timeout: 4000
})

// axios实例的请求方法
// axios#request(config)
// axios#get(url[, config])
// axios#delete(url[, config])
// axios#head(url[, config])
// axios#options(url[, config])
// axios#post(url[, data[, config]])
// axios#put(url[, data[, config]])
// axios#patch(url[, data[, config]])

// 使用commonjs的导出语法
module.exports = {
  axios,
  // axiosGet1,
  axiosGet2,
  axiosGet3,
  // axiosPost,
  axiosAll
} 