const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var user = message.mentions.members.first()
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"


    if (!user) { return message.inlineReply('`' + prefix + 'lutar @user`') }

    if (user.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }

    var list = ['win', 'lose']
    var result = list[Math.floor(Math.random() * list.length)]

    var lutando = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('⚔️ Lutando...')

    if (result === 'win') {
        var vitória = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle('👑 Vitória')
            .setDescription(`${message.author} ganhou a luta contra ${user}`)

        return message.inlineReply(lutando).then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(vitória))
    }

    if (result === 'lose') {
        var derrota = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('⛑️ Derrota')
            .setDescription(`${message.author} perdeu a luta contra ${user}`)

        return message.inlineReply(lutando).then(msg => msg.delete({ timeout: 5000 })).then(msg => msg.channel.send(derrota))
    }
}