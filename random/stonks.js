const Discord = require("discord.js")

exports.run = async (client, message, args) => {
        let list = [
                'https://imgur.com/jVL0mbR.gif',
                'https://imgur.com/TRHBCon.gif'
        ]

        let rand = list[Math.floor(Math.random() * list.length)]

        let embed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setImage(rand)
        await message.inlineReply(embed)
}