/**
 * home模块请求
**/

/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
**/
import { fetch, baseUrl } from 'config/index' // 可以简写为'config/index'是因为在'build/webpack.base.conf.js'里添加以下代码
/**
 resolve: {
    alias: {
      'config': resolve('src/apiconfig'), // 与src下的apiconfig和api对应
      'api': resolve('src/api')
    }
  }
**/

// 登录接口
export function loginUserNo (params) {
  return fetch(`${baseUrl}/root/login/checkMemberLogin`, params)
}
