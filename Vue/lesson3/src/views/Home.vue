<template lang="">
    <div>
        <div class="createbox">
            <input type="text" v-model="inputValue" placeholder="Matn kiriting"/>
            <button @click="createValue">Create</button>
        </div>
        <div class="taskbox">
            <div class="task"  v-for="(item, index) in allMessage" :key="index">
            <h2>{{item?.title}}</h2>
            <p>{{item?.createdAt}}</p>
        </div>
        <p class="infoMessage" v-if="!allMessage.length">Malumot yo'q</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            inputValue:null,
            allMessage:[]
        }
    },
    methods:{
        createValue(){
            if(!this.inputValue){
                return alert("hech bolmasa nimadir yozib qoying")
            }
            let date = Date.now()
            
            this.allMessage.push(
                {
                    title:this.inputValue,
                    createdAt: date
                }
            )
            this.inputValue=null
            // console.log(this.allMessage);
            // console.log(new Date(this.allMessage[1].createdAt));
            
        }
    }
}
</script>
<style lang="css">
    .createbox{
        width: 40%;
        height: 48px;
        margin:  0 auto;
        display: flex;
        justify-content: space-between;
        padding-left: 15px;
        background: rgb(197, 197, 197);
        border-radius: 20px;

    }
    .createbox>input, .createbox>button{
        border:none;
        background: none;
    }
    .createbox>input{
        width: 70%;
        height: 100%;
        color: rgba(0, 0, 0, 0.7);
        font-size: 20px;
    }
    .createbox>button{
        width: 120px;
        height: 100%;
        background: red;
        border-radius: 0px 20px 20px 0px;
        cursor: pointer;
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
    }
</style>