const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Counter-Strike: Global Offensive'
  let link1 = 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/'
  let st = 'Steam'
  let pt = 'PlayStation'
  let win = 'Microsoft Windows'
  let x = 'Xbox'
  let mc = 'MacOS'
  let li = 'Linux'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .setFooter(`Plataformas: ${win}, ${mc}, ${pt} 3/4, ${li}, ${x} 360`)
  return message.inlineReply(GameEmbed)
}