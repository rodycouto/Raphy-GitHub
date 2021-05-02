const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Uno - Ubisoft'
  let link1 = 'https://www.ubisoft.com/pt-br/game/uno/uno'
  let link2 = 'https://store.steampowered.com/search/?term=uno'
  let st = 'Steam'
  let site = 'Site Oficial'
  let win = 'Microsoft Windows'
  let mc = 'MacOS'
  let ios = 'iOS'
  let an = 'Android'
  let li = 'Linux'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${st}`, `${link2}`)
    .setFooter(`Plataformas: ${win}, ${mc}, ${li}, ${an}, ${ios}`)
  return message.inlineReply(GameEmbed)
}