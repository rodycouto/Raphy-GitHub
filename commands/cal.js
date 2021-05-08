const Discord = require("discord.js")
const math = require('mathjs')
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let color = await db.get(`color_${message.author.id}`)
    if (color === null) color = '#6F6C6C'

    const noargs = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🛠️ Calculadora -  BETA')
        .setDescription('Acho que não preciso explicar a função de um calculadora')
        .addField('Formato suportado', 'Adição: `10 + 10`\nDivisão: `10 / 10`\nSubtração: `10 - 10`\nMultiplicação: `10 * 10`')
        .setFooter('Comando instável...')

    if (!args[0]) { return message.inlineReply(noargs) }

    let resp
    try {
        resp = math.evaluate(args.join(" "))
    } catch (e) {
        const noargs = new Discord.MessageEmbed()
            .setColor('#8B0000')
            .setTitle('Por favor, siga o formato correto')
            .setDescription('Adição: `10 + 10`\nDivisão: `10 / 10`\nSubtração: `10 - 10`\nMultiplicação: `10 * 10`')
        return message.inlineReply(noargs)
    }

    const embed = new Discord.MessageEmbed()
        .setColor(color)
        .addField('📊 Conta', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('📝 Resultado', `\`\`\`css\n${resp}\`\`\``)
    return message.inlineReply(embed)
}