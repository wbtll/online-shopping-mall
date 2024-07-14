

<template>
  <div id="app" class="all">
    <Menu/>
    <main>
     <router-view/>
    </main>
  </div>
</template>
<script lang="ts">

import Menu from "@/components/Menu.vue";
import HomeMain from "@/components/Home.vue";
export default {

  components: {Menu,HomeMain},
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>