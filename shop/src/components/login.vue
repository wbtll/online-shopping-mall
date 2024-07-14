<template>
  <div id="login">
    <el-card style="width: 50vw; height:50vh;" shadow="hover"  class="el-card">

      <div class="svg">
       <img src="../assets/SignUp.svg"style="width: 20vw;height: 30vh">
      </div>
      <div>
        <el-form :model="this.form" label-width="50" style="width: 20vw" class="el-form">
          <el-form-item label="ID" class="el-form-item ">
            <el-input v-model="form.name" class="el-input"/>
          </el-form-item >
          <el-form-item label="密码" class="el-form-item">
            <el-input v-model="form.pwd" class="el-input"/>
          </el-form-item>
          <el-form-item label="" class="el-form-item" style="width: 200px">
            <el-input v-model="form.code" class="el-input"/>
          </el-form-item>
          <el-form-item class="el-form-item">
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>

          <el-form-item class="el-form-item">
            <span>免费注册</span>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script  lang="ts">
export default {
  data(){
    return{
      form:[{
        id:1,
        name:"qqqq",
        pwd:"",
        code:''
      }]
    }
  },
  methods:{
    onSubmit(){

    }
  }
}
</script>
<style scoped>
#login{
  .el-card{
   position: relative;
    display: flex;
    justify-content: flex-end;
    .el-form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 30px;
      margin-right: 30px;
      .el-form-item {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        .el-input{
          height: 40px;
        }
      }
    }
    .svg{
      //background: rgba(88,229,119,0.72);

      position: absolute;
      left: 4vw;
      top: 70px;
    }
  }
}

</style>