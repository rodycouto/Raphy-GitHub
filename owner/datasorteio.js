const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (message.author.id !== "451619591320371213") {
        message.delete().catch(err => { return })
        return message.inlineReply('⚠️ Este é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    if (!args[0]) { return message.channel.send('Faltou dizer a data') }

    let data = args.join(" ")

    db.set('datasorteio', data)
    return message.inlineReply('Feito!')
}