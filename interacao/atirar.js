const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  var list = ['https://imgur.com/t7z3ahp.gif', 'https://imgur.com/NYLxoNs.gif', 'https://imgur.com/iRh8iXc.gif', 'https://imgur.com/cdW9wbV.gif', 'https://imgur.com/0UDpkEr.gif', 'https://imgur.com/7mk656G.gif', 'https://imgur.com/z9m6vfN.gif', 'https://imgur.com/dEjgdqD.gif', 'https://imgur.com/iuCM9BD.gif']
  var list1 = ['https://imgur.com/t7z3ahp.gif', 'https://imgur.com/NYLxoNs.gif', 'https://imgur.com/iRh8iXc.gif', 'https://imgur.com/cdW9wbV.gif', 'https://imgur.com/0UDpkEr.gif', 'https://imgur.com/7mk656G.gif', 'https://imgur.com/z9m6vfN.gif', 'https://imgur.com/dEjgdqD.gif', 'https://imgur.com/iuCM9BD.gif']


  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  var rand = list[Math.floor(Math.random() * list.length)]
  var rand1 = list1[Math.floor(Math.random() * list1.length)]

  let user = message.mentions.users.first()
  if (!user) { return message.reply('`' + prefix + 'atirar @user`') }
  if (user.id === '821471191578574888') { return message.inlineReply('**NÃO** é pra atirar em mim, que isso? Ligando 190...') }
  if (user.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }

  var embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author} está atirando em você ${user}`, message.author.displayAvatarURL({ format: 'png' }))
    .setImage(rand)
    .setFooter('Clique em 🔁 para retribuir')

  var embed2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${user} levou a sério e está devolvendo os tiros ${message.author} `, user.displayAvatarURL({ format: 'png' }))
    .setImage(rand1)

  await message.inlineReply(embed).then(msg => {
    msg.react('🔁').catch(err => { return })
    setTimeout(function () { msg.reactions.removeAll().catch(err => { return }) }, 15000)

    msg.awaitReactions((reaction, user) => {
      if (message.mentions.users.first().id !== user.id) return

      if (reaction.emoji.name === '🔁') {
        msg.reactions.removeAll().catch(err => { return })
        return message.inlineReply(embed2)
      }
    })
  })
}