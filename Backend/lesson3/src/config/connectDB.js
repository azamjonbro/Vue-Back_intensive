const mongoose = require("mongoose")

async function connectMongoose (){
    try{
        const res = await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected successfully");
    }   
    catch(error){
        console.error("We have got a big problem: " + error.message);
    }
}

module.exports = {
    connectMongoose
}