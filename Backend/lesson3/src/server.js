require("dotenv").config()
const express = require("express")
const {connectMongoose} = require("./config/connectDB")
connectMongoose()
const {AdminModel} = require("./models/admin.model")

const createAdmin = async()=>{
    try {
        const admin = new AdminModel({
            name:"Asadbek",
            username:"asadbek",
            password:"123456"
        })
        await admin.save()
        console.log("Admin created successfully");
    } catch (error) {
        console.error("Error creating admin: " + error.message);
    }
}
createAdmin()



 







const app = express()

app.use(express.json())


app.get("/",(_,res)=>{
    res.send("Asadbek nima gap oka")
})
app.listen(9987, ()=>{
    console.log("this is running with: http://localhost:9987");
})