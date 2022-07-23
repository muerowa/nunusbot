const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTk5NzY0MzcwNTI5NzE0MjA2.GtJx5v.vyij3RO04pdXtOB4DcEGbF13sgQaJQ-DL76i8Y"

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello Babes!")
    }
})

client.login(process.env.TOKEN)