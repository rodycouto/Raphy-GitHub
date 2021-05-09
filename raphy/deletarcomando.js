const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) { return message.inlineReply('<:xis:835943511932665926> | Permissão Necessária: ADMINISTRADOR') }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const noargs = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🛠️ Delete comandos')
        .setDescription('Aqui você pode deletar comandos criados. Siga o exemplo para delerar algúm comando.')
        .addField('Crie', '`' + prefix + 'criarcomando NomeDoComando Resposta do comando`\n' + 'Exemplo: `' + prefix + 'criarcomando Sorvete Eu amo sorvete`')
        .addField('Exclua', '`' + prefix + 'deletecomando NomeDoComando`')

    if (!args[0]) { return message.inlineReply(noargs) }

    let commandName = args[0].toLowerCase()
    let database = db.get(`guildConfigurations_${message.guild.id}.commands`)

    if (database) {
        let data = database.find(x => x.name === commandName.toLowerCase())
        if (!data) { return message.inlineReply('<:xis:835943511932665926> | Este comando não existe no meu banco de dados.') }

        let value = database.indexOf(data)
        delete database[value]

        let filter = database.filter(x => { return x != null && x != '' })

        db.set(`guildConfigurations_${message.guild.id}.commands`, filter)

        return message.inlineReply('<a:Check:836347816036663309> | Comando `' + prefix + args[0] + '` deletado com sucesso!')
    }
    else { return message.inlineReply('<:xis:835943511932665926> |  Comando não encontrado') }
}