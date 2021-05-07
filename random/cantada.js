const Discord = require("discord.js")
const CantadasJson = require("./cantadas.json")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let color = await db.get(`color_${message.author.id}`)
    if (color === null) color = '#6F6C6C'

    const Cantadas = CantadasJson[Math.floor(Math.random() * CantadasJson.length)]

    const CantadasEmbed = new Discord.MessageEmbed()
        .setColor(color)
        .addField('❤️ Cantadas Raphy', `${Cantadas}`)
        .setFooter(`${prefix}sendcantada`)

    return message.inlineReply(CantadasEmbed).then(msg => {
      msg.react('🔄').catch(err => { return }) // 1º Embed
      setTimeout(function () { msg.reactions.removeAll().catch(err => { return }) }, 40000)
  
      msg.awaitReactions((reaction, user) => {
        if (message.author.id !== user.id) return
  
        if (reaction.emoji.name === '🔄') { // 1º Embed - Principal
            const CantadasEmbed = new Discord.MessageEmbed()
            .setColor(color)
            .addField('❤️ Cantadas Raphy', `${CantadasJson[Math.floor(Math.random() * CantadasJson.length)]}`)
            .setFooter(`${prefix}sendcantada`)
          msg.edit(CantadasEmbed).catch(err => { return })
        }
      })
    })
}