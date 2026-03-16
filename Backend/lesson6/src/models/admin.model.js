const {Schema, model}= require("mongoose")


const AdminSchema = new Schema({
    name:{
        type:String,
        require:true
    },

    username:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    }
})

const AdminModel = model("admins",AdminSchema)

module.exports=AdminModel
