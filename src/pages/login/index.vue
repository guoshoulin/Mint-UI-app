<template>
  <div class="page">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="nav-footer">
      <footer>
        <router-link v-for="(item, index) in navlist"
                     :key="index"
                     v-bind:class="{'active':activeRoute == item.path}"
                     :to="item.path">
          <div :class="'tab-'+index"></div>
          <p v-text="item.name"></p>
        </router-link>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navlist: [
        {
          'path': '/Home',
          'name': '首页'
        },
        {
          'path': '/Story',
          'name': '故事'
        },
        {
          'path': '/Footer',
          'name': '足迹'
        },
        {
          'path': '/Days',
          'name': '纪念日'
        }
      ]
    }
  },
  computed: {
    activeRoute () {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/index.less";
@import "~@/styles/variable.less";
.page{
  .nav-footer{
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    .h(98);
    background: @tab-general-bg-color;
    display: block;
    footer{
      font-size: 0;
      border-top: 1px solid #E7E7E7;
      border-bottom: 1px solid #F8F8F8;
      width: 100%;
      .pt(10);
      .h(98);
      .lh(28);
      display: flex;
      a {
        text-decoration: none;
        color: @base-font-color;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        display: block;
        .fs(22);
        .tab-0, .tab-1, .tab-2, .tab-3 {
          display: inline-block;
          .h(42);
          .w(42);
          background-size: cover;
        }
        .tab-0 {
          background-image: url("../../assets/imgs/index-noselect.svg");
        }
        .tab-1 {
          background-image: url("../../assets/imgs/note-noselect.svg");
        }
        .tab-2 {
          background-image: url("../../assets/imgs/print-noselect.svg");
        }
        .tab-3 {
          background-image: url("../../assets/imgs/dy-noselect.svg");
        }
        &:hover {
          text-decoration: none;
        }
        &.router-link-active.active {
          .tab-0 {
            background-image: url("../../assets/imgs/index-select.svg");
          }
          .tab-1 {
            background-image: url("../../assets/imgs/note-select.svg");
          }
          .tab-2 {
            background-image: url("../../assets/imgs/print-select.svg");
          }
          .tab-3 {
            background-image: url("../../assets/imgs/dy-select.svg");
          }
        }
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>
