const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var Random = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setImage('https://imgur.com/RcrfOc3.gif')

  setTimeout(function () { message.delete() }, 5000)
  return message.inlineReply(Random).then(msg => msg.delete({ timeout: 5000 }).catch(err => { return }))
}