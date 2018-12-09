<style lang="stylus">
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-page class="PG-tabs">
    <vha-view axis="y">
      <vha-subview full="height">
        <vha-routerview></vha-routerview>
      </vha-subview>
      <vha-subview>
        <vha-tabbar type="base">
          <vha-tab-item icon="fa fa-home fa-2x" push="/tabs/home">主页</vha-tab-item>
          <vha-tab-item icon="fa fa-commenting fa-2x" push="/tabs/msg">消息</vha-tab-item>
          <vha-tab-item icon="fa fa-user fa-2x" push="/tabs/user">我的</vha-tab-item>
        </vha-tabbar>
      </vha-subview>
    </vha-view>
  </vha-page>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'PGtabs',
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