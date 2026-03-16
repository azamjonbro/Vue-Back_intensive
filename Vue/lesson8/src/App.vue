<template >
  <div>
    <Navbar/>
    <Home/>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default {

  components: {
    Navbar: defineAsyncComponent(() => import('./components/Navbar.vue')),
    Home: defineAsyncComponent(() => import('./components/Home.vue'))

  }
}
</script>
<style >
  
</style>