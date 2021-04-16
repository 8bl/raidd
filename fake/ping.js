const Discord = require("discord.js");

module.exports = {
nombre: "botping",
alias: ["bp","ping"],
run: (client, message, args) => {

    

    let ping = new Discord.MessageEmbed()

    
    .addField (`**Ping**`,` My ping is  ${Math.round(client.ws.ping)}ms`)
    .setColor("GREEN")

    message.channel.send(ping)
    .catch(error => console.log("error_PING")) 
 }
}