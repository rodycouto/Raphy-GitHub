const Discord = require("discord.js")

exports.run = async (client, message, args) => {



  let list = [
    'https://imgur.com/gVpxrzK.gif',
    'https://imgur.com/Nemm1pQ.gif',
    'https://imgur.com/Uq9PWC2.gif',
    'https://imgur.com/hYQJMUE.gif',
    'https://imgur.com/XosXY1z.gif',
    'https://imgur.com/6YTvzGQ.gif',
    'https://imgur.com/uzx2f68.gif'
  ]

  let rand = list[Math.floor(Math.random() * list.length)]

  let embed = new Discord.MessageEmbed()
    .setColor('#000000')
    .setDescription(`${message.author} booom!`)
    .setImage(rand)
  await message.inlineReply(embed)
}