const { util } = require('discord.js-commando')
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    const rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete().catch(err => { return })
        return message.channel.send('⚠️ Este é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }
    
    let page = args[0]
    if (!page) {
        let pag = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Qual a pagina?')
        return message.inlineReply(pag).then(msg => msg.delete({ timeout: 5000 })).catch(err => { return })
    }

    let servers = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).map(g => g)
    let paginated = util.paginate(servers, page, 20)
    let embed = new Discord.MessageEmbed()
        .setDescription(paginated.items.map(g => `${g.name} - ${g.memberCount} (${g.id})`))
    message.inlineReply(embed)
}
