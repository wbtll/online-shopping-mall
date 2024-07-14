<template>
<div id="main">
<div class="top">
  <div class="logo">
    <img src="/public/shop.png" style="width: 50px;height: 50px" alt="">
  </div>
  <div class="input">
    <el-input
        v-model="input"
        style="width: 45vw"
        placeholder="Search"
        clearable
    />
  </div>
</div>
<div class="carousel_msg" style="">
  <div class="card">
      <el-carousel
          loop
          autoplay
          trigger="hover"
          style="">
        <el-carousel-item v-for="item in imgArr" :key="item.id" style="">
         <img :src="item.url" alt="" style="height: 420px;width: 43vw">
        </el-carousel-item>
      </el-carousel>
  </div>
  <div class="card" >
    <el-card style="width: 30vw; height:420px;" shadow="hover">
      <div class="line_1">
        <el-avatar :size="100" :src="Avatar" />
         <h3>早上，中午晚上好我亲爱的用户</h3>
      </div>
      <div class="line_2">
        <ul>
          <li>
            <ul>
              <li>0</li>
              <li>购物车</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>0</li>
              <li>待发货</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>0</li>
              <li>待收货</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>0</li>
              <li>待付款</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>0</li>
              <li>待评价</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="line_3">
        <Vue3Lottie :animationData="beautyMakeup" class="vue3Lottie" style="width: 8vw"/>
        <Vue3Lottie :animationData="animationData" class="vue3Lottie" style="width: 8.8vw"/>
        <Vue3Lottie :animationData="furniture" class="vue3Lottie" style="width: 8vw"/>
      </div>
    </el-card>
  </div>

</div>
<div class="product"></div>
</div>

</template>
<script lang="ts">
import  animationData from "../assets/video/headset.json"
import beautyMakeup from "../assets/video/beautyMakeup.json"
import  furniture from "../assets/video/furniture.json"
import { Vue3Lottie } from "vue3-lottie";
export default {
  components: {Vue3Lottie},
  data() {
    return {
      input: '',
      Avatar: '/public/20210403211113_e715c.jpg',
      imgArr: [
        {id: 1, url: "/public/full-moon-460314.jpg"},
        {id: 2, url: "/public/ocean-4823443.jpg"},
        {id: 3, url: "/public/pagoda-8612554.jpg"},
        {id: 4, url: "/public/road-7704729_1920.jpg"},
        {id: 5, url: "/public/work-8772016.jpg"},
        {id: 6, url: "/public/cat-6578336.jpg"},
        {id: 7, url: "/public/clouds-7813335.jpg"},
        {id: 8, url: "/public/yosemite-922757.jpg"}
      ],
      animationData:animationData,
      beautyMakeup:beautyMakeup,
      furniture:furniture
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
 #main{
   width: 75vw;
   height: auto;
   .top{
     display: flex;
     justify-content: space-around;
     align-items: center;
   }
   .carousel_msg{
     width: 75vw;
     display: flex;
     margin-top: 20px;
     justify-content: space-between;
     .card{
       width: 45vw;
       height: 420px ;
       .el-carousel{
          width: 43vw;
          height: 420px;
          margin-right: 2vw;
         .el-carousel__item  {
           display: flex;
           width: 43vw;
           height:420px;
         }
       }
       .el-card{
         position: relative;
                 .line_1{
                   display: flex;
                   align-items: center;
                   justify-content: space-evenly;
                 }
                 .line_2{
                   display: flex;
                   position: absolute;
                   top: 125px;
                   left: -45px;
                   overflow: hidden;
                   ul {
                     display: inherit;

                     li {
                       list-style: none;
                       font-weight:bold;
                       width:100px;
                       ul {
                         display: flex;
                         flex-direction:column;
                         align-items: center;
                         justify-content: center;
                         list-style:inherit;
                       }

                     }
                   }
                 }
         .line_3{
           width: 95%;
           display: flex;
           align-items: center;
           position: absolute;
           bottom: 2px;
           left: 12px;
         }
        }
     }

   }
 }

</style>