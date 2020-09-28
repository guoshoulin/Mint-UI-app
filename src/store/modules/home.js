/*
  * home.js
  * 用于home模块的状态管理
*/

// 引入定义的方法
import * as types from '../mutation-type'
const home = {
  state: {
    number: 1
  },
  mutations: {
    // 修改state，可以通过mapMutation调用
    [types.SET_NUM] (state, num) {
      state.number = num
    }
  },
  actions: {

  },
  // 定义getters,可以通过mapGetters拓展函数调用
  getters: {
    number: state => {
      return state.number
    }
  }
}
// 输出home模块
export default home
