const TelegramBot = require("node-telegram-bot-api")
require("dotenv").config()



const bot = new TelegramBot(process.env.TOKEN, {polling:true})


bot.onText(/\/start/,(msg)=>{
    let chatID = msg.chat.id

    bot.sendMessage(chatID, "salom "+ msg.chat.first_name)
    // console.log(msg);    
})

bot.on("message",(msg)=>{
    if(msg.text.includes("blat")){
        bot.sendMessage(msg.chat.id, "sokinmang birodar",{
            reply_markup:{
                inline_keyboard:[
                    [{text:"ok",callback_data:"ok"}],
                    [{text:"no",callback_data:"no"}]
                ],
                resize_keyboard:true,
            }
        })
    }
    
})
bot.on("callback_query",(query)=>{
    if(query.data === "ok"){
        bot.sendAudio(query.message.chat.id, "./XUSHLA MANI.mp3",{
            reply_markup:{
                remove_keyboard:true
            }
        })
    }
})

// bot.sendAudio(msg.chat.id, "./XUSHLA MANI.mp3",{reply_markup:{
//     remove_keyboard:true
// }})
console.log("bot ishga tushdi");
