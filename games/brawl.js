const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  if (args[0]) { return message.inlineReply('Por favor, utilize apenas o comando, sem nada na frente. Informações desnecessárias atrapalham meu processamento.') }

  let games = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Existe 2 jogos com o apelido Brawl no meu banco de dados')
    .setDescription('☝️ Brawlhalla\n✌️ Brawlstars')

  await message.inlineReply(games).then(msg => {
    msg.react('☝️') // Check
    msg.react('✌️') // X

    msg.awaitReactions((reaction, user) => {
      if (message.author.id !== user.id) return

      if (reaction.emoji.name === '☝️') { // Sim
        msg.delete().catch(err => { return })

        let game = 'Brawlhalla'
        let link1 = 'https://store.steampowered.com/app/291550/Brawlhalla/'
        let link2 = 'https://play.google.com/store/apps/details?id=air.com.ubisoft.brawl.halla.platform.fighting.action.pvp&hl=pt_BR'
        let st = 'Steam'
        let ps = 'Play Store'
        let pt = 'PlayStation'
        let w = 'Microsoft Windows'
        let nsw = 'Nintendo Switch'
        let xbo = 'Xbox One'
        let mc = 'MacOS'
        let ios = 'iOS'
        let an = 'Android'
        let GameEmbed = new Discord.MessageEmbed()
          .setColor('BLUE')
          .setTitle(`${game}`)
          .addField(`${st}`, `${link1}`)
          .addField(`${ps}`, `${link2}`)
          .setFooter(`Plataformas: ${pt} 4, ${nsw}, ${an}, ${xbo}, ${mc}, ${w}, ${ios}`)
        return message.inlineReply(GameEmbed)
      }
      if (reaction.emoji.name === '✌️') { // Não
        msg.delete().catch(err => { return })

        let game = 'Brawlhalla'
        let link1 = 'https://store.steampowered.com/app/291550/Brawlhalla/'
        let link2 = 'https://play.google.com/store/apps/details?id=air.com.ubisoft.brawl.halla.platform.fighting.action.pvp&hl=pt_BR'
        let st = 'Steam'
        let ps = 'Play Store'
        let pt = 'PlayStation'
        let w = 'Microsoft Windows'
        let nsw = 'Nintendo Switch'
        let xbo = 'Xbox One'
        let mc = 'MacOS'
        let ios = 'iOS'
        let an = 'Android'

        let GameEmbed = new Discord.MessageEmbed()
          .setColor('BLUE')
          .setTitle(`${game}`)
          .addField(`${st}`, `${link1}`)
          .addField(`${ps}`, `${link2}`)
          .setFooter(`Plataformas: ${pt} 4, ${nsw}, ${an}, ${xbo}, ${mc}, ${w}, ${ios}`)
        return message.inlineReply(GameEmbed)
      }
    })
  })
}