const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Gartic'
  let link1 = 'https://gartic.com.br/'
  let link2 = 'https://play.google.com/store/apps/details?id=com.gartic.Gartic&hl=pt_BR'
  let ps = 'Play Store'
  let site = 'Site Oficial'
  let win = 'Microsoft Windows'
  let ios = 'iOS'
  let an = 'Android'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${an}, ${ios}, ${win}`)
  return message.inlineReply(GameEmbed)
}