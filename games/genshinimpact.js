const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Genshin Impact RPG'
  let link1 = 'https://genshin.mihoyo.com/en'
  let link2 = 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=en_US&gl=US'
  let ps = 'Play Store'
  let pt = 'PlayStation'
  let w = 'Microsoft Windows'
  let ios = 'iOS'
  let an = 'Android'

  let TFMEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField('Site Oficial', `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setImage('https://imgur.com/380aoSo.gif')
    .setFooter(`Plataformas: ${w}, ${pt} 4, Nintendo Switch, ${an}, ${ios}`)
  return message.inlineReply(TFMEmbed)
}