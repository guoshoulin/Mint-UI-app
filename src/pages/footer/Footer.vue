<template>
  <div class="footer">
    <common-header :showback="true" :showmore="true" :tittle="tittle"></common-header>
  </div>
</template>

<script>
import commonHeader from '@/components/header'
export default {
  components: {
    commonHeader
  },
  data () {
    return {
      tittle: '我的足迹'
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/index.less";
@import "~@/styles/variable.less";

</style>
