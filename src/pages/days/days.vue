<template>
  <div>
    <common-header :showback="true"
                   :showmore="true"
                   :tittle="tittle"></common-header>
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
      tittle: '纪念日'
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/index.less";
@import "~@/styles/variable.less";

</style>
