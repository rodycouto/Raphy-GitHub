const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let role = db.get(`autorole_${message.guild.id}`)
    let role2 = db.get(`autorole2_${message.guild.id}`)
    if (!role2) role2 = 'Cargo não definido.'
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    if (role) {
        let autoroleautal = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Autorole System está ativado')
            .setDescription(`Autorole 1: <@&${role}>\nAutorole 2: <@&${role2}>`)
            .addFields(
                {
                    name: 'Mude o cargo',
                    value: '`' + prefix + 'setautorole @cargo`\n' + '`' + prefix + 'setautorole2 @cargo`',
                    inline: true
                },
                {
                    name: 'Desative o autorole',
                    value: '`' + prefix + 'setautorole off`\n' + '`' + prefix + 'setautorole2 off`',
                    inline: true
                }
            )
            .setFooter(`${prefix}help autorole`)
        return message.inlineReply(autoroleautal)
    }

    if (role === null) {
        let autoroleautal = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Autorole System está desativado')
            .setDescription(`Cargo atual: Nenhum`)
            .addFields(
                {
                    name: 'Ative o autorole',
                    value: '`' + prefix + 'setautorole @cargo`',
                    inline: true
                }
            )
            .setFooter(`${prefix}help autorole`)
        return message.inlineReply(autoroleautal)
    }
}