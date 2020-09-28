import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 移动端页面切换及切换动画适配
// 需要向左方向动画的路由 this.$router.to('****')
Router.prototype.togo = function (path) {
  this.isleft = true
  this.isright = false
  this.push(path)
}

// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path) {
  this.isleft = false
  this.isright = true
  this.push(path)
}

// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isleft = false
  this.isright = true
  this.go(-1)
}

// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function (path) {
  this.isright = true
  this.isleft = false
}

// 点击浏览器前进按钮执行
Router.prototype.togoin = function () {
  this.isright = false
  this.isleft = true
}

// 上面在执行路由跳转的时候，在App.vue里面判断滑动的方向，来指定动画的方向，不需要动画的话，可以直接使用this.$router.push('****')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: (resolve) => require(['@/pages/login/login'], resolve)
    },
    {
      path: '/Index',
      name: 'Index',
      component: (resolve) => require(['@/pages/login/index'], resolve),
      redirect: '/Home',
      children: [
        {
          path: '/Home',
          name: 'Home',
          component: (resolve) => require(['@/pages/home/Home'], resolve)
        },
        {
          path: '/Days',
          name: 'Days',
          component: (resolve) => require(['@/pages/days/days'], resolve)
        },
        {
          path: '/Story',
          name: 'Story',
          component: (resolve) => require(['@/pages/story/story'], resolve)
        },
        {
          path: '/Footer',
          name: 'Footer',
          component: (resolve) => require(['@/pages/footer/Footer'], resolve)
        }
      ]
    },
    {
      path: '/Home/Details',
      name: 'Details',
      component: (resolve) => require(['@/pages/home/components/details'], resolve)
    }
  ]
})
