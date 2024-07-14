<script lang="ts">
import {defineComponent,h } from 'vue'
import { ElDivider } from 'element-plus'

export default defineComponent({
  name: "Menu",
  data(){
    return{
      activeIndex:1,
      activeIndex2:1,
      size:10,
      spacer: h(ElDivider, { direction: 'vertical' })
    }
  },
  methods:{
    handleSelect (key: string, keyPath: string[]){
      console.log(key, keyPath)
      this.$router.push({
        path: key

      })
    },
    click: function () {
      this.$router.push({
        path: '/userview',
        name: 'user',

      })
    }

  }
})
</script>

<template>
  <div id="menu">
    <div class="login">
      <el-space :size="size" :spacer="spacer">
        <span @click="click">登录</span>
        <span>注册</span>
      </el-space>
    </div>

    <div class="banner">
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router:true
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-menu-item index="/classifyView">分类</el-menu-item>
        <el-menu-item index="/shopCartView">购物车</el-menu-item>
        <el-menu-item index="/orderview" >订单信息</el-menu-item>
        <el-menu-item index="/about">个人信息</el-menu-item>
      </el-menu>
    </div>

  </div>
</template>

<style lang="less" scoped>
#menu{
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  justify-content: space-around;
  .login{
    font-size: 14px;
  }
  .banner{
    padding-left: 20px;
    .el-menu-demo {
      border: none;
      width: 60vw;
      height: 50px;
      .el-menu-item {
        width: 10vw;
        //继承父级样式
        border: inherit;

      }
      .el-menu-item:focus,.el-menu-item:hover{
        background: none;
        border: none;
      }
    }

  }

}


</style>