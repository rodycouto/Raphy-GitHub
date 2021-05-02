const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Among Us'
  let link1 = 'https://store.steampowered.com/app/945360/Among_Us/'
  let link2 = 'https://play.google.com/store/apps/details?id=com.innersloth.spacemafia&hl=en'
  let st = 'Steam'
  let ps = 'Play Store'
  let win = 'Microsoft Windows'
  let ios = 'iOS'
  let an = 'Android'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .addField('Among Us Gratis (pc)', 'https://discord.gg/CSAKXC6')
    .setFooter(`Plataformas: ${win}, ${an}, ${ios}`)
  return message.inlineReply(GameEmbed)
}