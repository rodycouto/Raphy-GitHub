const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) { return message.channel.send('Eu preciso da permissão `GERENCIAR MENSAGENS` para executar este comando. Este comando contém segredos que não podem ser expostos.') }

    message.delete()

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let discriminator = message.author.discriminator // Code 1
    let id = message.author.id // Code 2
    let code1 = db.get(`code1_${message.author.id}`)
    let MedalhaAcess = db.get(`MedalhaAcess_${message.author.id}`)
    let medalha = db.get(`medalha_${message.author.id}`)

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🏅 Medalha Cammum')
        .setDescription('Por seus esforços, o Rei Vouwer Heslow te nomeará Cavaleiro(a) Pessoal da Princesa Kaya! Por este mérito, você ganhará uma medalha!')
        .addField('Comando de Ativação', '`' + prefix + 'medalha Código Pessoal 1`\n' + '`' + prefix + 'medalha Código Pessoal 2`')
        .setFooter('Se você desvendou o enigma do código, não repasse para ninguém.')

    const CódigoCertoEmbed2 = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('🏅 Medalha Cammum Adquirida')
        .setDescription('Você adquiriu um item de classe especial!')
        .addField('Comando Desbloqueado', '`' + prefix + 'dogname`')

    if (!MedalhaAcess) { return message.channel.send('<:xis:835943511932665926> | Leia a história #4 Final `' + prefix + 'floresta final`') }
    if (!args[0]) { return message.channel.send(embed) }
    if (medalha) { return message.channel.send('<:xis:835943511932665926> | Você já adquiriu sua medalha!') }
    if (args[1]) { return message.channel.send('<:xis:835943511932665926> | Nada além do seu código!') }

    if (args[0] === discriminator) {
        if (code1) { return message.channel.send('<:xis:835943511932665926> | Soldado, você já disse seu primeiro código! Tente descobrir o segundo.') }

        setTimeout(function () {
            db.set(`code1_${message.author.id}`, "OK")
            message.channel.send('<a:Check:836347816036663309> | 1/2 | Você disse o primeiro código com sucesso!')
        }, 4100)
        return message.channel.send('<a:Pulse:839682326211854337> Verificando código pessoal...').then(msg => msg.delete({ timeout: 4000 }).catch(err => { return }))

    } else if (args[0] === id) {
        if (!code1) { return message.channel.send('<:xis:835943511932665926> | Soldado, você descobriu seu segundo código, mas diga o primeiro código antes!') }

        setTimeout(function () {
            db.delete(`code1_${message.author.id}`)
            db.set(`medalha_${message.author.id}`, "ON")
            message.channel.send('<a:Check:836347816036663309> | 2/2 | Você disse o segundo código com sucesso!', CódigoCertoEmbed2)
        }, 4100)
        return message.channel.send('<a:Pulse:839682326211854337> | Verificando código pessoal...').then(msg => msg.delete({ timeout: 4000 }).catch(err => { return }))

    } else {
        return message.channel.send('<a:Pulse:839682326211854337> | Verificando código pessoal...').then(msg => msg.delete({ timeout: 4000 }).catch(err => { return })).then(msg => msg.channel.send('<:xis:835943511932665926> | Código inválido!'))
    }
}