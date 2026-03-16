<template >
  <div>
    {{ totalPrice }}
    <input type="text" v-model="username">
  </div>
</template>
<script>
export default {
  props:{
    
  },
    data(){
      return{
        price:340,
        quantity:1000000,
        username:"Laylo"
      }
    },
    computed:{
       totalPrice(){
        return this.price*this.quantity
      }
    },
    watch:{
      username(newVal, oldVal){
        console.log(newVal,  oldVal);
      },
      
    }
}
</script>
<style >
  
</style>