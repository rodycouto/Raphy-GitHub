const Discord = require("discord.js")

exports.run = async (client, message, args) => {



   let list = [
      'https://imgur.com/qPzrtI3.gif',
      'https://imgur.com/DA1TD46.gif'
   ]

   let rand = list[Math.floor(Math.random() * list.length)]

   let embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setImage(rand)
   await message.inlineReply(embed)
}