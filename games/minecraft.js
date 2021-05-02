const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let game = 'Minecraft'
  let link1 = 'https://www.minecraft.net/pt-pt'
  let link2 = 'https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=pt'
  let ps = 'Play Store'
  let pt = 'PlayStation'
  let site = 'Site Oficial'
  let win = 'Microsoft Windows'
  let nsw = 'Nintendo Switch'
  let x = 'Xbox'
  let mc = 'MacOS'
  let ios = 'iOS'
  let an = 'Android'
  let li = 'Linux'

  let GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${win}, ${mc}, ${li}, ${an}, ${ios}, ${x} 360/One, Raspberry Pi, Windows Phone, ${pt} 4/Vita, Wii U, tvOS, ${nsw}, New Nintendo 3DS`)
  return message.inlineReply(GameEmbed)
}