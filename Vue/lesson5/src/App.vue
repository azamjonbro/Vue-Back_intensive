<template >
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import api from './utils/api';

export default {
  mounted(){
    let token = localStorage.getItem("token")
    if(token){
      // this.$router.push("/")
      // api.post("/refresh/token", token)
    }
    else{
      this.$router.push("/login")
    }
  }
}
</script>
<style >
  
</style>