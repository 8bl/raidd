const Discord = require("discord.js");



module.exports = {
    nombre: "help",
    alias: ["commands"],
    run: (client, message, args) => {


      

 const help = new Discord.MessageEmbed()

 .setTitle("Help")
 .addField("Moderatión:","clear, ban, kick, say, unban")
 .addField("Informatión:","servericon, userinfo, ping, avatar, help")
 .addField("Fun:","8ball, poll")
 .setColor("GREEN")

 message.channel.send(help)
    .catch(error => console.log(`Error_help`));
    
}
}


      
    