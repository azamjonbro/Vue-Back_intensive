require("dotenv").config()
const express = require("express")
const {connectMongoose} = require("./config/connectDB")
const adminRouter = require("./router/admin.router")
const app = express()

app.use(express.json())

app.use("/",adminRouter)

app.listen(9987, ()=>{
    connectMongoose()
    console.log("this is running with: http://localhost:9987");
})