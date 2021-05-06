exports.run = async (client, message, args) => {
  const msg = await message.inlineReply("<a:Pulse:839682326211854337>")
  msg.edit(`⏳ Pings\nAPI ${Math.round(client.ws.ping)}ms\nTiming Responsive ${msg.createdTimestamp - message.createdTimestamp}ms`)
}