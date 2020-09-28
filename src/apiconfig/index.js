/**
 * axios封装公共的请求
 * 这里会对请求做以下处理
 * 1.定义像请求返回成功的状态、请求超时时间等常量
 * 2.对请求做一次公共的封装
 * 3.对token的拦截和存储等操作
**/

// eslint disable
import axios from 'axios'

/**
 * 定义请求常量
 * TIME_OUT、ERR_OK
**/
export const TIME_OUT = 1000 // 请求超时时间
export const ERR_OK = true // 请求成功时返回状态，字段和后台统一
export const baseUrl = process.env.BASE_URL // 引入全局url，定义在全局变量process.env中，开发环境为了方便转发，值为空字符串

// 请求超时时间
axios.defaults.timeout = TIME_OUT

// 封装请求拦截
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token') // 获取token
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers['Authorization'] = ''
    if (token !== null) { // 如果token不为null，否则传token给后台
      config.headers['Authorization'] = token
    }
  },
  error => {
    return Promise.reject(error)
  }
)

// 封装响应拦截，判断token是否过期
axios.interceptors.response.use(
  response => {
    let {data} = response
    if (data.message === 'token failure!') { // 如果token过期，移除token
      localStorage.removeItem('token')
      // 进行重新登录操作
    } else {
      return Promise.resolve(response)
    }
  }
)

// 封装post请求
export function fetch (requestUrl, params = '') {
  return axios({
    url: requestUrl,
    method: 'post',
    data: {
      'body': params
    }
  })
}
