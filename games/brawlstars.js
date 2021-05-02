const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Brawl Stars'
  let link1 = 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=pt_BR'
  let link2 = 'https://apps.apple.com/br/app/brawl-stars/id1229016807'
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