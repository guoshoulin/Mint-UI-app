// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import router from './router'
// 引入mintUI
import Mint from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'
// flexible.js进行屏幕适配
import '../static/js/flexible'
// 点击事件右300ms的延迟，可采用fastclick.js解决
import FastClick from 'fastclick'

/**
*监听浏览器点击返回前进操作按钮
*浏览器端使用需要注意路由path的创建，二级应该在一级的基础上添加
*如一级/Home， 则二级为/Home/Detail, 依次往后
*如果是app 的话，可忽略以下代码
*/
let init = 0
window.addEventListener('popstate', function (e) {
  init++
  if (init < 2) {
    router.beforeEach((to, form, next) => {
      let arr1 = to.path.split('/')
      let arr2 = form.path.split('/')
      if (arr1.length === 2) {
        if (arr1[1].length === 0) {
          arr1.splice(1, 1)
        }
      }
      if (arr2.length === 2) {
        if (arr2[1].length === 0) {
          arr2.splice(1, 1)
        }
      }
      if (arr1.length < arr2.length) {
        router.togoback()
      } else {
        router.togoin()
      }
      next()
    })
  }
}, false)

Vue.use(Vuex)
Vue.use(Mint)

Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
