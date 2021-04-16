const Discord = require("discord.js");

module.exports = {
nombre: "ban",
alias: [],
run: async (client, message, args) => {

    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
  
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  

  if(!user) {
     


    message.channel.send("Please mention a user") 
    return;
  }
if (!message.member.permissions.has("BAN_MEMBERS")) {
  let nopermsembed = new Discord.MessageEmbed()
    .setDescription(
      "**Sorry you do not have permissions to `BAN MEMBERS`**"
    )
    .setColor("RED");
  message.channel.send(nopermsembed)

  .catch(error => message.channel.send(`There was an error executing the command`))

  return;


    }
if(!user.bannable) 
if (!user.bannable) {
let mostrankembed = new Discord.MessageEmbed()

      .setDescription(
        "**This user has more ranks than you **"
      )
      .setColor("RED");
    message.channel.send(mostrankembed)

    .catch(error => message.reply(`There was an error executing the command"`))


    return;
   }
   if (message.author === banned) {
    let sanctionyourselfembed = new Discord.MessageEmbed()
      .setDescription(`**This cannot be done** `)
      .setColor("RED");
    message.channel.send(sanctionyourselfembed);

    return;
  }
  if (!message.guild.me.permissions.has("ATTACH_FILES","BAN_MEMBERS")) {
    let botnopermsembed = new Discord.MessageEmbed()
      .setDescription(
        "**I do not have `BAN MEMBERS` permissions**"
      )
      .setColor("RED");
    message.channel.send(botnopermsembed)

    .catch(error => message.channel.send(`There was an error executing the command`));
      }

      
      message.guild.members.ban(banned, { reason: message.author });
  
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${banned.tag} Was banned.`)
      .setColor("GREEN");
  
    message.channel.send(successfullyembed)

    .catch(error => message.channel.send(`error_ban`));
}
}