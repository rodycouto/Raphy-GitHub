const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = '**Clash Royale**'
  let link1 = 'https://play.google.com/store/apps/details?id=com.supercell.clashroyale&hl=pt_BR'
  let link2 = 'https://apps.apple.com/br/app/clash-royale/id1053012308'
  let plat = 'Plataformas: Android, iOS'
  let ps = 'Play Store'
  let as = 'Apple Store'

  let HelpEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${ps}`, `${link1}`)
    .addField(`${as}`, `${link2}`)
    .setFooter(`${plat}`)
  return message.inlineReply(HelpEmbed)
}