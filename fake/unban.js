const Discord = require("discord.js");

module.exports = {
    nombre: "unban",
    alias: [],
    run: (client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) { 
            return message.channel.send("**Sorry you do not have permissions to `BAN MEMBERS` **")
          }
          
          if(!message.guild.me.hasPermission("BAN_MEMBERS")) { 
            return message.channel.send("**I do not have `BAN MEMBERS` permissions") 
          }
          
          let userID = args[0] 
          message.guild.fetchBans().then(bans=> { 
            if(bans.size == 0) {
let error2 = new Discord.MessageEmbed()
              .setDescription("**No banned users found**")  
              .setColor("RED")

message.channel.send(error2)
              return;
            }
            let bUser = bans.find(b => b.user.id == userID)
            if(!bUser) {

let error1 = new Discord.MessageEmbed()
              .setDescription("**This user was not found in the banned list**") 
              .setColor("RED")


message.channel.send(error1)
              return;

            }
            {
          
            message.guild.members.unban(bUser.user) 
            
              let unban = new Discord.MessageEmbed()
              .setColor("GREEN")
              .setDescription("The user was unbanned from the server")
              message.channel.send(unban)
              
              .catch(error => console.log("error_UNBAN"));
            }
            
        })
          
        ;} 

    }