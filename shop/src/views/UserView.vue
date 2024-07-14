

<template>

<div id="app">
  <div class="user">
    <div class="login">
    <login/>
    </div>
  </div>

</div>
</template>
<script lang="ts">
import login from "../components/login.vue"
export default {
  components: {login},
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>
<style scoped>
#app{
  z-index: 999;
  background: url("/public/ocean-4823443.jpg");
  background-size: 100vw 100vh;
  .user{
    display: flex;

    .login{
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>