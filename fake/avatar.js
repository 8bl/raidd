const Discord = require("discord.js");

module.exports = {
nombre: "avatar",
alias: [],
run: (client, message, args) => {


let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const avatar = new Discord.MessageEmbed()

.setImage(user.user.displayAvatarURL({size : 2048, dynamic: true}))
.setColor("GREEN")

message.channel.send(avatar)

.catch(error => console.log("error_avatar"));
}
}
