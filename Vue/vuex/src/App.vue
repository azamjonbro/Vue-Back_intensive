<template>
  <div>
    {{$store.state.count}}
    <button @click="$store.dispatch('increment', 1)">+</button>
    <button @click="$store.dispatch('decrement', 1)">-</button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  
</style>