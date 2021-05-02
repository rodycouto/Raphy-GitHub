const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Transformice'
  let link1 = 'https://store.steampowered.com/app/335240/Transformice/'
  let link2 = 'https://www.transformice.com/'
  let st = 'Steam'
  let w = 'Microsoft Windows'
  let mc = 'MacOS'
  let nv = 'Navegador'

  let TFMEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .addField(`${nv}`, `${link2}`)
    .setFooter(`Plataformas: ${w}, ${mc}`)
  return message.inlineReply(TFMEmbed)
}