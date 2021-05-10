const Discord = require("discord.js")
const db = require("quick.db")
const Cancelado = require("./cancelado.json")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let cancel = Cancelado[Math.floor(Math.random() * Cancelado.length)]

    if (args[1]) { return message.inlineReply('<:xis:835943511932665926> | Nada além do @user!\nUse `' + prefix + 'cancelar @user`') }

    let user = message.mentions.members.first() || message.member
    if (user.id === '837147659898191902') { return message.channel.send(`🔇 | ${message.author} foi cancelado por tentar me cancelar.`) }

    return message.channel.send(`🔇 | ${user.user.username} ${cancel}`)
}