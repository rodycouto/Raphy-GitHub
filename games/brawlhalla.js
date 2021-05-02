const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Brawlhalla'
  let link1 = 'https://store.steampowered.com/app/291550/Brawlhalla/'
  let link2 = 'https://play.google.com/store/apps/details?id=air.com.ubisoft.brawl.halla.platform.fighting.action.pvp&hl=pt_BR'
  let st = 'Steam'
  let ps = 'Play Store'
  let pt = 'PlayStation'
  let w = 'Microsoft Windows'
  let nsw = 'Nintendo Switch'
  let xbo = 'Xbox One'
  let mc = 'MacOS'
  let ios = 'iOS'
  let an = 'Android'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${pt} 4, ${nsw}, ${an}, ${xbo}, ${mc}, ${w}, ${ios}`)
  return message.inlineReply(GameEmbed)
}