<style lang="stylus"> 
@import "./assets/stylus/global.styl"
@import "./assets/stylus/font-awesome.styl"
#app
  >.vha_UI-view
    >.vha_UI-subview
      >.vha_UI-routerview
        background-color transparent
</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <vha-app>
    <vha-view axis="y">
      <vha-subview>
        <vha-navbar sideButton="left" type="base"></vha-navbar>
      </vha-subview>
      <vha-subview full="height">
        <vha-routerview></vha-routerview>
      </vha-subview>
      <!-- <vha-subview>
        <vha-tabbar type="base">
          <vha-tab-item icon="fa fa-home fa-2x" push="/home">主页</vha-tab-item>
          <vha-tab-item icon="fa fa-commenting fa-2x" push="/msg">消息</vha-tab-item>
          <vha-tab-item icon="fa fa-user fa-2x" push="/user">我的</vha-tab-item>
        </vha-tabbar>
      </vha-subview> -->
    </vha-view>
  </vha-app>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
export default {
  name: 'App',
  beforeCreate() {
    //实例创建之前
  },
  props: {
    //父组件参数
  },
  data() {
    //动态数据
    return {
    }
  },
  components: {
    //组件 - 引入或定义
  },
  computed: {
    //计算 - 缓存结果,变动时执行
  },
  methods: {
    //方法 - 进入页面创建
    onBackButton: function () {
      if (this.$route.path.split('/').length != 2) {
        this.$router.go(-1)
        return
      }
      
      this.$vhaToast({pos:'bottom'}).show('再点击一次退出！')
      
      clearTimeout(this.timeid)
      this.timeid = setTimeout(() => {
        this.exit = false
      }, 2000)
      
      if (this.exit) {
        this.$vha.app.exitApp()
      } else {
        this.exit = true
      }
    }
  },
  watch: {
    //观察 - 数据或方法变动
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.$el存在
    
    // 监听返回键
    document.addEventListener('deviceready', () => {
      document.addEventListener("backbutton", this.onBackButton, false)
    }, false)
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
  destroyed() {
    //销毁后
  }
}
</script>