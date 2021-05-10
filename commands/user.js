const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) { prefix = "-" }

  let user = message.mentions.members.first() || message.member
  let avatar = user.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })

  let color = db.get(`color_${user.id}`)
  if (color === null) color = "'#6F6C6C'"

  if (args[1]) { return message.inlineReply('<:xis:835943511932665926> Por favor, use apenas o comando!\n`' + prefix + 'user @alguém` ou `' + prefix + 'user`.' + ' Informações adicionais atrapalham meu processamento.') }

  const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setAuthor(`Nome da Conta`, avatar)
    .setDescription('📇`' + user.user.tag + '`')

  return message.inlineReply(embed)
}