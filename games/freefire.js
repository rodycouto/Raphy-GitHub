const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Garena Free Fire'
  let link1 = 'https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=pt_BR'
  let link2 = 'https://apps.apple.com/us/app/garena-free-fire-wonderland/id1300146617'
  let ps = 'Play Store'
  let as = 'Apple Store'
  let ios = 'iOS'
  let an = 'Android'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${ps}`, `${link1}`)
    .addField(`${as}`, `${link2}`)
    .setFooter(`Plataformas: ${an}, ${ios}`)
  return message.inlineReply(GameEmbed)
}