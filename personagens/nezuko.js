const Discord = require("discord.js")

exports.run = async (client, message, args) => {


    let NezukoList = [
        'https://imgur.com/aXAIvkS.gif',
        'https://imgur.com/MZjgryh.gif',
        'https://imgur.com/7KtfCMh.gif',
        'https://imgur.com/0kQwpIV.gif',
        'https://imgur.com/6hAIcLU.gif',
        'https://imgur.com/lagU5oh.gif',
    ]

    let gif = NezukoList[Math.floor(Math.random() * NezukoList.length)]

    let nezukoo = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setImage(gif)

    await message.inlineReply(nezukoo).then(msg => {
        msg.react('🔄').catch(err => { return }) // 1º Embed
        msg.react('❌').catch(err => { return })
        setTimeout(function () { msg.reactions.removeAll() }, 30000)

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return;

            if (reaction.emoji.name === '🔄') { // 1º Embed - Principal
                reaction.users.remove(user)
                let nezukoo = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setImage(NezukoList[Math.floor(Math.random() * NezukoList.length)])
                msg.edit(nezukoo)
            }
            if (reaction.emoji.name === '❌') {
                msg.delete().catch(err => { return })
            }
        })
    })
}