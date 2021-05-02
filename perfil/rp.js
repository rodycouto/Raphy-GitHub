const db = require("quick.db")
const ms = require("parse-ms")

exports.run = async (client, message, args) => {

    let user = message.mentions.members.first()
    let timeout = 1800000
    let rptimeout = await db.get(`rptimeout_${message.author.id}`)

    if (!user) { return message.inlineReply('Você se esqueceu do `@user`') }

    if (user.id === message.author.id) { return message.inlineReply('Você não pode dar reputação para você mesmo.') }

    if (rptimeout !== null && timeout - (Date.now() - rptimeout) > 0) {
        let time = ms(timeout - (Date.now() - rptimeout))
        return message.inlineReply(`Você já deu reputação hoje. Volte em ${time.days}d, ${time.hours}h, ${time.minutes}m, e ${time.seconds}s`)
    } else {

        let rp = db.fetch(`rp_${user.id}`)
        if (rp === null) { rp = 0 }

        let amount = 1
        db.add(`rp_${user.id}`, amount)
        db.set(`rptimeout_${message.author.id}`, Date.now())

        message.inlineReply(`Você deu reputação para ${user}`)
        let PrivadoDesativado = db.get(`privadooff_${user.id}`)
        if (PrivadoDesativado) { return } else { user.send(`${message.author} te deu uma reputação.`).catch(err => { return }) }
    }
}