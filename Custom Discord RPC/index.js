var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Boy :)",
assets : {
large_image : "discord",
large_text : "Boy :)" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Discord" , url : "https://discord.gg/PzA8CTbp37"},{label : "Youtube",url : "https://www.youtube.com/channel/UCuDVx-IOZW2bTeQvwmvqKpA"}]
}
})
})
client.login({ clientId : "821842482291408906" }).catch(console.error);