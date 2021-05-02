const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Mario'
  let link1 = 'https://store.nintendo.com.br/catalogsearch/result/?q=Mario'
  let link2 = 'https://play.google.com/store/search?q=Mario&c=apps&hl=en_US&gl=US'
  let ps = 'Play Store'
  let site = 'Site Oficial'
  let win = 'Microsoft Windows'
  let nsw = 'Nintendo Switch'
  let mc = 'MacOS'
  let ios = 'iOS'
  let an = 'Android'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${nsw}, ${an}, ${ios}, ${win}, ${mc}`)
  return message.inlineReply(GameEmbed)
}