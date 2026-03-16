// module.js    
// import data from "./"
//  let data = salom 
// export default data



//common js  es6
// const data = require('data.json')

// let script = 20
// module.exports = script


const express = require("express")
const cors = require("cors")


const app= express()
app.use(cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.get("/",(req, res)=>{
    res.send(`<div>
            <b>Salom Asadbek</b>
        </div>`)
})


let PORT = 5673
app.listen(PORT,()=>{
    console.log(`Servering ${PORT} da ishga tushdi`);
    
})

// ip.ip.ip.ip

// localhost:5673