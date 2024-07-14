

<template>
   <div id="app" >
    <router-view/>
   </div>
</template>
<script lang="ts">
import Menu from "@/components/Menu.vue";
import HomeView from "@/views/HomeView.vue";
export default {
  components: {HomeView,Menu},
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>
<style scoped>
#app{
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}


</style>
