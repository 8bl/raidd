const Discord = require("discord.js");

module.exports = {
nombre: "servericon",
alias: [],
run: async (client, message, args) => {

let icon = message.guild.iconURL({size : 2048, dynamic: true})

                  if(!icon) return message.reply ("This server does not have a icon")
                  var server = message.guild;
                  const servericon = new Discord.MessageEmbed()
                  .setColor("GREEN")
                  .setAuthor(server.name)
                 .setImage(`${icon}`)
                 message.channel.send(servericon)

                 .catch(error => console.log("error_servericon"));
}
}