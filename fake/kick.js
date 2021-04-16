const Discord = require("discord.js");

module.exports = {
nombre: "kick",
alias: [],

run: async (client, message, args, guild) => {
    

     
      let kicked = message.mentions.users.first() || client.users.resolve(args[0]); 
      let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) 
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
    if(!user) {

     message.channel.send("Please mention a user") 

     .catch(error => console.log(`There was an error executing the command`))
     return;

    }
      if (message.author === user) {
        let sanctionyourselfembed = new Discord.MessageEmbed()
          .setDescription(`**This cannot be done**`)
          .setColor("RED");
        message.channel.send(sanctionyourselfembed)

    .catch(error => message.reply(`There was an error executing the command`));
        return;
    
      
      }
      
    
      if (!message.member.permissions.has("KICK_MEMBERS")) {
        let nopermsembed = new Discord.MessageEmbed()
          .setDescription(
            "**Sorry you do not have permissions to `KICK MEMBERS`**"
          )
          .setColor("RED");
        message.channel.send(nopermsembed)

        .catch(error => message.reply(`There was an error executing the command`));
    
        return;
      
    }
      if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
        let botnopermsembed = new Discord.MessageEmbed()
          .setDescription(
            "**I do not have `KICK MEMBERS` permissions **"
          )
          .setColor("RED");
        message.channel.send(botnopermsembed)

        .catch(error => message.reply(`There was an error executing the command`));
    
        return;

        }
      
      
    
      message.guild.member(kicked);
    
      let successfullyembed = new Discord.MessageEmbed()
        .setDescription(`${kicked.tag} was kicked.`)
        .setColor("GREEN");
    
      message.channel.send(successfullyembed)

      .catch(error => console.log("Error_KICK"));
    
    }
}

