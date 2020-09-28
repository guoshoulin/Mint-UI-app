<template>
  <div class="header">
    <div class="left-icon">
      <span v-if="showback"
            @click="back"
            class="icon-back"></span>
    </div>
    <div class="header-tittle">
      <span v-if="showinput">
        <cus-input :searchMsg="searchMsg"></cus-input>
      </span>
      <span v-if="!showinput">{{tittle}}</span>
    </div>
    <div class="right-icon">
      <span v-if="showmore"
            @click="showMore"
            class="icon"></span>
    </div>
  </div>
</template>

<script>
import cusInput from '@/components/cus-input'
export default {
  components: {
    cusInput
  },
  props: {
    showback: {
      type: Boolean,
      default: false
    },
    tittle: {
      type: String,
      default: '标题'
    },
    showmore: {
      type: Boolean,
      default: false
    },
    showinput: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchMsg: ''
    }
  },
  methods: {
    back () {
      console.log('上一页')
    },
    showMore () {
      console.log('分享')
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/index.less";
@import "~@/styles/variable.less";
.header{
  width: 100%;
  text-align: center;
  .h(100);
  .lh(100);
  background-color: @base-color;
  color: @base-header-color;
  .fs(@base-header-size);
  display: flex;
  z-index: 1;
  .left-icon{
    position: relative;
    flex: 1;
    .icon-back{
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .left(25);
      .top(25);
      background-image: url("../assets/imgs/w-back.svg");
      background-size: cover;
    }
  }
  .header-tittle{
    flex: 3;
  }
  .right-icon{
    position: relative;
    flex: 1;
    .icon{
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .right(25);
      .top(25);
      background-image: url("../assets/imgs/more.svg");
      background-size: cover;
    }
  }
}
</style>
