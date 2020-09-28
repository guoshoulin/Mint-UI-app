<template>
  <div class="hello-world">
    <h1>{{ msg }}</h1>
    <h2>{{ hint }}</h2>
    <ul>
      <li class="li input-box">
        <span class="icon">账号:</span>
        <input type="text" class="search" placeholder="请输入账号" v-model="form.name">
      </li>
      <li class="li input-box">
        <span class="icon">密码:</span>
        <input type="text" class="search" placeholder="请输入密码" v-model="form.passWord">
      </li>
      <li class="li login">
        <span @click="login">登录</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Demo',
      hint: '这是一个基本的Vue移动端项目案例',
      form: {
        name: '',
        passWord: ''
      }
    }
  },
  methods: {
    login () {
      if (this.form.name === '') {
        Toast('请输入账号')
        return
      }
      if (this.form.name !== 'guoshoulin') {
        Toast('账号错误')
        return
      }
      if (this.form.passWord === '') {
        Toast('请输入密码')
        return
      }
      if (this.form.passWord !== '123456') {
        Toast('密码错误')
        return
      }
      this.$router.push('/Index')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~@/styles/index.less";
@import "~@/styles/variable.less";
.hello-world{
  background-image: url("../../assets/timg.jpeg");
  text-align: center;
  h1{
    .h(200);
    .lh(200);
    .fs(40);
    color: #fff;
    font-weight: 200;
  }
  h2{
    .h(100);
    .lh(100);
    .fs(30);
  }
  ul {
    list-style-type: none;
    padding: 0;
    padding: 100px 0;
    .li {
      .h(100);
      .lh(100);
    }
    .input-box{
      .icon{
        .fs(24);
      }
      .search{
        .b-radius(8);
        .h(50);
        .lh(50);
        outline: none;
        .fs(26);
        .pl(10);
        .pr(10);
      }
    }
    .login{
      span{
        display: inline-block;
        .h(50);
        .w(100);
        .lh(50);
        .b-radius(8);
        color: #fff;
        text-align: center;
        font-family: PingFangSC-Medium, sans-serif;
        background: #FF6027;
      }
    }
  }
}
</style>
