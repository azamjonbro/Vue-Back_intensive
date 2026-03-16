<template >
  <div>
    <Child name="" @hey="showEmit($event)"/>
    <p v-if="name[0]=='ali'">{{
        showEmit()
      }}</p>
    <p v-show=""></p>
    
  </div>
</template>
<script>
  import Child from './Child.vue';
export default {
  components:{
    Child
  },
  data(){
    return{
      name:["ali","jasur"],

    }
  },
  methods: {
      showEmit(message){
        console.log(message);
      }
  },
  mounted() {
    
  }
}
</script>
<style >
  
</style>