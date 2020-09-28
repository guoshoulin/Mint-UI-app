<template>
  <div class="content-box">
    详情页面
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/index.less";
@import "~@/styles/variable.less";
.content-box{
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-flex-direction:column;
  -ms-flex-direction:column;
  flex-direction:column;
  width:100%;
  height:100%;
}
</style>
