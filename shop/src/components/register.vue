<template>
  <div id="login">
    <el-card style="width: 30vw; height:420px;" shadow="hover">
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script  lang="ts">
export default {
  data(){
    return{
      form:[]
    }
  },
  methods:{

  }
}
</script>
<style scoped>
#login{

}
</style>