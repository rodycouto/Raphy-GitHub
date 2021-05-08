const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let user = message.mentions.members.first() || message.author || message.member

    let color = await db.get(`color_${user.id}`)
    if (color === null) color = '#6F6C6C'

    const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(`${user.username}`)
        .setDescription(`🆔 \`${user.id}\``)

    if (!args[0]) { return message.inlineReply(embed) }
}