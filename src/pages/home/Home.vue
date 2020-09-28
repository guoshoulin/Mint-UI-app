<template>
  <div class="hello">
    <h1>{{ num }}</h1>
    <p>
      <mt-button @click="login">测试提交</mt-button>
    </p>
    <div>
      <mt-button @click="detail">详情</mt-button>
    </div>
  </div>
</template>

<script>
// 引入map方法
import { mapMutations, mapGetters, mapState } from 'vuex'
import * as homeApi from 'api/home-api'
import { ERR_OK } from 'config/index'
export default {
  name: 'Home',
  data () {
    return {
      num: 10
    }
  },
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM' // 调用setNum方法
    }),
    increase () {
      this.num++
      this.setNum(this.num) // 将this.num转入setNum
    },
    login () {
      let params = {
        password: '123456',
        storeNo: '',
        userName: 'guoshoulin'
      }
      homeApi.loginUserNo(params).then(res => {
        let {data} = res
        if (data.success === ERR_OK) {
          // 请求成功操作，存储token
          localStorage.setItem('token', data.value.token)
        }
      }).catch(() => {
        console.log('失败')
      })
    },
    detail () {
      this.$router.togo('/Home/Details')
    }
  },
  computed: {
    ...mapGetters([ // 通过getters获取state数据
      'number'
    ]),
    ...mapState({
      number: state => state.home.number // 通过state获取state数据
    })
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/index.less";
@import "~@/styles/variable.less";
.hello{
  width: 100%;
  text-align: center;
}
</style>
