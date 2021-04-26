const Canvacord = require("canvacord/src/Canvacord")
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  var member = message.mentions.users.first()
  var mentionedMemberAvatar = member.displayAvatarURL({ dynamic: false, format: "png" })

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  if (!member) { return message.inlineReply('`' + prefix + 'slaap @user`') }

  if (member.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }
  var messageAuthorAvatar = message.author.displayAvatarURL({ dynamic: false, format: "png" })
  let image = await Canvacord.slap(messageAuthorAvatar, mentionedMemberAvatar)
  let slap = new Discord.MessageAttachment(image, "slap.png")

  return message.inlineReply(slap)
}