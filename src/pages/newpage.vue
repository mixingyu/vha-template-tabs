<style lang="stylus">
.PG-newpage
  padding rpx(40)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="PG-newpage">

    newpage

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'PGnewpage',
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
  },
  watch: {
    //观察 - 数据或方法变动
  },
  mounted() {
    //挂载实例后 - this.$el存在
    
    // 默认页面动画根据路由自动判断in out
    // 同级路由代理navbar左侧按钮事件自己实现
    this.$route.meta.vhaNavbar.leftButtonEvent = () => {
      this.$vhaRt.go({value: -1, animate: 'out'})
    }
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>