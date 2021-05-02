const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let Moderador = db.get(`moderadoreschatglobal_${message.author.id}`)
    if (!Moderador) {
        message.delete().catch(err => { return })
        return message.channel.send('⚠️ Este é um comando restrito para Moderadores do Chat Global.')
    }

    let Mensagem = args.join(" ")

    client.guilds.cache.forEach(guild => {

        let CanaisValidos = guild.channels.cache.find(ch => ch.name === "naya-global-chat")

        if (!CanaisValidos) return

        return CanaisValidos.send(`📢 ${Mensagem}\n \n*~ Naya Global System*`)
    })
}