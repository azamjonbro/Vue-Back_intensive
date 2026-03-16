<template lang="">
  <div class="container">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
  components:{
    Navbar
  }
}
</script>
<style lang="">
  
</style>