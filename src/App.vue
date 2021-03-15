<template>
  <div>
    <Header></Header>
    <!-- 路由组件切换的位置 -->
    <router-view></router-view>
    <!-- 只有home和serch有底部,用户点击频率高,用v-show -->
    <!-- 写法一,值适合少量场景,只有两个场景隐藏footer -->
    <!-- <Footer v-show="$route.path!=='/login'&&$route.path!=='/register'"></Footer> -->
    <!-- 写法二 在路由配置上写-->
    <Footer v-show="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    name:'App',
    components:{
      Header,
      Footer
    }

}
</script>

<style lang='less' scoped>

</style>
