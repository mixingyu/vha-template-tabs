<style lang="stylus">
.tabs_PG-homeIndex
  padding rpx(40)
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="tabs_PG-homeIndex">
    
    <!-- UI组件-名称 -->
    <div class="UI-name">
      <h1>Hello, vue hybrid app!</h1>
      <h2>Hello, vue hybrid app!</h2>
      <h3>Hello, vue hybrid app!</h3>
      <h4>Hello, vue hybrid app!</h4>
      <h5>Hello, vue hybrid app!</h5>
      <h6>Hello, vue hybrid app!</h6>
    </div>

    <div class="_ph-4x"></div>
    
    <vha-button v-vhaRt="{push:'/newpage', animate: 'in'}">去同级新页面</vha-button>
    
    <div class="_ph-2x"></div>
    
    <vha-button v-vhaRt="{push:'/tabs/home/subpage'}">去子页面</vha-button>

  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'tabsPGhomeIndex',
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
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>