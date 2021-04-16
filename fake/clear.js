const Discord = require("discord.js");

module.exports = {
nombre: "clear",
alias: [],
run: async (client, message, args) => {
    if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
        let clearembed = new Discord.MessageEmbed()
          .setDescription(
            "**I do not `MANAGE_MESSAGES` permissions**"
          )
          .setColor("RED");
        
          return message.channel.send(clearembed).then(m => m.delete({ timeout: 10000 }))
    
      
    
        return;
    
          }
      if (!message.member.permissions.has("MANAGE_MESSAGES")) {
        let nopermsclear = new Discord.MessageEmbed()
          .setDescription(
            "**You do not have permission to use this command**"
          )
          .setColor("RED");
          return message.channel.send(nopermsclear).then(m => m.delete({ timeout: 10000 }))
    
        return;
          }
    const messages = args.slice(1).join(" ");
      const deleteCount = parseInt(args[0], 10);
      
    
      if(!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply("Please enter a value between 2 and 100");
      
        
    
      const fetched = await message.channel.messages.fetch({limit: deleteCount});
      message.channel.bulkDelete(fetched)
      message.channel.send("Cleared " + messages + "messages").then(m => m.delete({ timeout: 3000 }))
    
      
      .catch(error => console.log(`Error_clear`)); 
        }
    }
