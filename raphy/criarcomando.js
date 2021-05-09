const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) { return message.inlineReply('<:xis:835943511932665926> | Permissão Necessária: ADMINISTRADOR') }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const noargs = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🛠️ Crie comandos')
        .setDescription('Aqui você pode criar comandos personalizados. Siga o exemplo para criar seu comando.')
        .addField('Crie', '`' + prefix + 'criarcomando NomeDoComando Resposta do comando`\n' + 'Exemplo: `' + prefix + 'criarcomando Sorvete Eu amo sorvete`')
        .addField('Exclua', '`' + prefix + 'deletecomando NomeDoComando`')
        .setFooter('A Raphy não se responsabiliza pelo conteúdo presente nos comandos criados.')

    if (!args[0]) { return message.inlineReply(noargs) }

    let commandName = args[0].toLowerCase()
    if (commandName.length > 10) { return message.inlineReply('<:xis:835943511932665926> | O nome do comando não pode ultrapassar **10 caracteres**') }

    let commandResponse = args.slice(1).join(" ")
    if (!commandResponse) { return message.inlineReply('<:xis:835943511932665926> | Você não disse a resposta do comando.\nUse `' + prefix + 'criarcomando` para ver como cria comandos.') }

    if (commandResponse.length > 50) { return message.inlineReply('<:xis:835943511932665926> | A resposta do comando não pode ultrapassar **50 letras**\nMeu banco de dados também sente dor, sabia?') }

    let JaExiste = db.get(`guildConfigurations_${message.guild.id}.commands`)
    if (JaExiste && JaExiste.find(x => x.name === commandName.toLowerCase())) { return message.inlineReply('<:xis:835943511932665926> |Este comando já existe') }

    let data = { name: commandName, response: `${commandResponse}\n\nComando por: <@${message.author.id}>` }
    db.push(`guildConfigurations_${message.guild.id}.commands`, data)

    return message.inlineReply('<a:Check:836347816036663309> | O comando `' + prefix + commandName.toLowerCase() + '` foi adicionado ao servidor!')
}