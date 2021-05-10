const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    const commands = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📋 Comandos Exclusivos de Doação (OWNER)')
        .setDescription('Com este comando, o meu criador torna possivel a doação de qualquer item da loja para qualquer pessoa.')
        .addField('Comando', '`' + prefix + 'give Item @user`')

    if (!args[0]) { return message.channel.send(commands) }

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete().catch(err => { return })
        return message.channel.send('⚠️ Este é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    let user = message.mentions.members.first()

    if (['arma', 'gun'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give arma @user`') }

        db.set(`arma_${user.id}`, "Arma")
        return message.channel.send(`Uma arma adicionada ao slot de ${user}`)
    }

    if (['armaid', 'gunid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'give armaid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send("<:xis:835943511932665926> Isso não é um número.") }

        db.set(`arma_${id}`, "Arma")
        return message.channel.send(`Uma arma adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['title', 'título', 'titulo'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give titulo @user`') }

        db.set(`title_${user.id}`, "ON")
        return message.channel.send(`A permissão de alterar título foi adicionada ao slot de ${user}`)
    }

    if (['titleid', 'títuloid', 'tituloid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'give titleid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send("<:xis:835943511932665926> Isso não é um número.") }

        db.set(`title_${id}`, "ON")
        return message.channel.send(`A permissão de alterar título foi adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['diamante', 'dima', 'diamond'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give diamante @user`') }

        db.set(`dima_${user.id}`, "ON")
        return message.channel.send(`O Diamante Negro foi adicionado ao slot de ${user}`)
    }

    if (['diamanteid', 'dimaid', 'diamondid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'give diamandteid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send("<:xis:835943511932665926> Isso não é um número.") }

        db.set(`dima_${id}`, "ON")
        return message.channel.send(`O Diamante Negro foi adicionado ao slot de <@${id}> *(${id})*.`)
    }

    if (['picareta'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give picareta @user`') }

        db.set(`picareta_${user.id}`, "Picareta")
        db.add(`offpicareta_${user.id}`, 50)
        return message.channel.send(`Uma picareta adicionada ao slot de ${user}`)
    }

    if (['picaretaid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'give picaretaid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send("<:xis:835943511932665926> Isso não é um número.") }

        db.set(`picareta_${id}`, "Picareta")
        db.add(`offpicareta_${id}`, 50)
        return message.channel.send(`Uma picareta adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['remedio', 'remédio'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give remedio @user`') }

        db.set(`remedio_${user.id}`, "Remedio")
        return message.channel.send(`Remédio do Velho Welter foi adicionada ao slot de ${user}`)
    }

    if (['remedioid', 'remédioid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'give remedioid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send("<:xis:835943511932665926> Isso não é um número.") }

        db.set(`remedio_${id}`, "Remedio")
        return message.channel.send(`Remédio do Velho Welter foi adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['vara'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give vara @user`') }

        db.set(`vara_${user.id}`, "Vara")
        return message.channel.send(`Uma vara de pesca adicionada ao slot de ${user}`)
    }

    if (['varaid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'give varaid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send("<:xis:835943511932665926> Isso não é um número.") }

        db.set(`vara_${id}`, "Vara")
        return message.channel.send(`Uma vara de pesca adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['faca'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give faca @user`') }

        db.set(`faca_${user.id}`, "Faca")
        return message.channel.send(`Uma faca adicionada ao slot de ${user}`)
    }

    if (['facaid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'give varaid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.set(`faca_${id}`, "Faca")
        return message.channel.send(`Uma faca adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['cachorro', 'doguinho', 'dog'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give cachorro @user`') }

        db.set(`cachorro_${user.id}`, "Cachorro Brown")
        return message.channel.send(`Cachorrinho Brown foi adicionado ao slot de ${user}`)
    }

    if (['cachorroid', 'doguinhoid', 'dogid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.channel.send('`' + prefix + 'give cachorroid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.set(`cachorro_${id}`, "Cachorro Brown")
        return message.channel.send(`Cachorrinho Brown foi adicionado ao slot de <@${id}> *(${id})*.`)
    }

    if (['machado'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give machado @user`') }

        db.set(`machado_${user.id}`, "Machado")
        return message.channel.send(`Um machado adicionada ao slot de ${user}`)
    }

    if (['machadoid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.channel.send('`' + prefix + 'give cachorroid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.set(`machado_${id}`, "Machado")
        return message.channel.send(`Um machado adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['loli'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give loli @user`') }

        db.set(`loli_${user.id}`, "Loli")
        return message.channel.send(`Uma loli adicionada ao slot de ${user}`)
    }

    if (['loliid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.channel.send('`' + prefix + 'give loliid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.set(`loli_${id}`, "Loli")
        return message.channel.send(`Uma loli adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['estrela1'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give estrela1 @user`') }

        db.set(`estrela1_${user.id}`, "ON")
        return message.channel.send(`<:starM:832974891635572787> Estrela 1 adicionada ao slot de ${user}`)
    }

    if (['estrela1id'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.channel.send('`' + prefix + 'give estrela1id ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.set(`estrela1_${id}`, "ON")
        return message.channel.send(`<:starM:832974891635572787> Estrela 1 adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['estrela2'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give estrela1 @user`') }

        db.set(`estrela1_${user.id}`, "ON")
        db.set(`estrela2_${user.id}`, "ON")
        return message.channel.send(`<:starM:832974891635572787> Estrela 2 adicionada ao slot de ${user}`)
    }

    if (['estrela2id'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.channel.send('`' + prefix + 'give estrela2id ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.set(`estrela1_${id}`, "ON")
        db.set(`estrela2_${id}`, "ON")
        return message.channel.send(`<:starM:832974891635572787> Estrela 2 adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['estrela3'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give estrela1 @user`') }

        db.set(`estrela1_${user.id}`, "ON")
        db.set(`estrela2_${user.id}`, "ON")
        db.set(`estrela3_${user.id}`, "ON")
        return message.channel.send(`<:starM:832974891635572787> Estrela 3 adicionada ao slot de ${user}`)
    }

    if (['estrela3id'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.channel.send('`' + prefix + 'give estrela3id ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.set(`estrela1_${id}`, "ON")
        db.set(`estrela2_${id}`, "ON")
        db.set(`estrela3_${id}`, "ON")
        return message.channel.send(`<:starM:832974891635572787> Estrela 3 adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['estrela4'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give estrela4 @user`') }

        db.set(`estrela1_${user.id}`, "ON")
        db.set(`estrela2_${user.id}`, "ON")
        db.set(`estrela3_${user.id}`, "ON")
        db.set(`estrela4_${user.id}`, "ON")
        return message.channel.send(`<:starM:832974891635572787> Estrela 4 adicionada ao slot de ${user}`)
    }

    if (['estrela4id'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.channel.send('`' + prefix + 'give estrela4id ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.set(`estrela1_${id}`, "ON")
        db.set(`estrela2_${id}`, "ON")
        db.set(`estrela3_${id}`, "ON")
        db.set(`estrela4_${id}`, "ON")
        return message.channel.send(`<:starM:832974891635572787> Estrela 4 adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['estrela5'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give estrela1 @user`') }

        db.set(`estrela1_${user.id}`, "ON")
        db.set(`estrela2_${user.id}`, "ON")
        db.set(`estrela3_${user.id}`, "ON")
        db.set(`estrela4_${user.id}`, "ON")
        db.set(`estrela5_${user.id}`, "ON")
        return message.channel.send(`<:starM:832974891635572787> Estrela 5 adicionada ao slot de ${user}`)
    }

    if (['fossil'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give fossil @user`') }

        db.set(`fossil_${user.id}`, "Fossil")
        return message.channel.send(`Um fossil adicionada ao slot de ${user}`)
    }

    if (['fossilid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.channel.send('`' + prefix + 'give fossilid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.set(`fossil_${id}`, "Fossil")
        return message.channel.send(`Um fossil adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['mamute'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give mamute @user`') }

        db.set(`mamute_${user.id}`, "Mamute")
        return message.channel.send(`Um mamute adicionada ao slot de ${user}`)
    }

    if (['mamuteid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.channel.send('`' + prefix + 'give mamuteid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.set(`mamute_${id}`, "Mamute")
        return message.channel.send(`Um mamute adicionada ao slot de <@${id}> *(${id})*.`)
    }

    if (['lotery', 'loteria'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'give lotery @user`') }
        let loteria = db.get('loteria')

        db.add(`banco_${user.id}`, loteria)
        db.delete('loteria')
        return message.channel.send(`O prêmio da loteria foi depositado no banco de ${user}.`)
    }

    if (['loteryid', 'loteriaid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.channel.send('`' + prefix + 'give mamuteid ID`') }
        if (id.length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send('<:xis:835943511932665926> Esse ID não é um número.') }

        db.add(`banco_${id}`, loteria)
        db.delete('loteria')
        return message.channel.send(`O prêmio da loteria foi depositado no banco de <@${id}> *(${id})*.`)
    }

    return message.channel.send('Comando não encontrado no registro.')
}