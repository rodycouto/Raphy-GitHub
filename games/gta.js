const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Grand Theft Auto V - Rockstar Games'
  let link1 = 'https://www.rockstargames.com/'
  let link2 = 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
  let st = 'Steam'
  let site = 'Site Oficial'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${st}`, `${link2}`)
    .setFooter(`Plataformas: PlayStation 5, PlayStation 4, Xbox Series X, PlayStation 3, Xbox 360, Xbox One, Microsoft Windows`)
  return message.inlineReply(GameEmbed)
}