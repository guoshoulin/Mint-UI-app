<template>
  <div>
    <common-header :showback="true" :showmore="true" :showinput="true"></common-header>
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

    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/index.less";
@import "~@/styles/variable.less";

</style>
