const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Summoners War: Sky Arena'
  let link1 = 'https://play.google.com/store/apps/details?id=com.com2us.smon.normal.freefull.google.kr.android.common&hl=pt_BR'
  let ps = 'Play Store'
  let an = 'Android'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${ps}`, `${link1}`)
    .setFooter(`Plataformas: ${an}`)
  return message.inlineReply(GameEmbed)
}