<template lang="">
    <div>
        {{
            name? "hello":"malumot yo'q"
        }}
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type:[String, Object, Number],
            required:true
        },
        price:{
            type:Number,
            required:true,
            max:10*1000
        }
    },
    mounted(){
        console.log(this.name);
        this.$emit("hey",1)
    },
    
}
</script>
<style lang="">
    
</style>


<!-- function hello(props){
    return(
        <>
        
        </>
    )
} -->