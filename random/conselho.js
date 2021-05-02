const Discord = require("discord.js")
const fetch = require('node-fetch')
const translate = require('@iamtraction/google-translate')

exports.run = async (client, message, args) => {
    let data = await fetch("https://api.adviceslip.com/advice").then((res) => res.json())

    let pt = 'pt'
    let text = `${data.slip.advice}`
    translate(`${data.slip.advice}`, { to: pt }).then(res => {
        let embed = new Discord.MessageEmbed()
            .setDescription(`${res.text}`)
            .setColor("BLUE")

        return message.inlineReply(embed)
    })
}