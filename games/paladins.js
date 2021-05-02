const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Paladins'
  let link1 = 'https://www.paladins.com/'
  let link2 = 'https://store.steampowered.com/app/444090/Paladins/'
  let st = 'Steam'
  let ps = 'Play Store'
  let site = 'Site Oficial'
  let win = 'Microsoft Windows'
  let x = 'Xbox'
  let mc = 'MacOS'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${st}`, `${link2}`)
    .setFooter(`Plataformas: ${ps} 4, Nintendo Switch, ${x} One, ${win}, ${mc}`)
  return message.inlineReply(GameEmbed)
}