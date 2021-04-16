const Discord = require("discord.js");

module.exports = {
    nombre: "say",
    alias: [],
    run: (client, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) {
            let nopermssay = new Discord.MessageEmbed()
              .setDescription(
                "**You do not have permission to use this command **"
              )
              .setColor("RED");
            message.channel.send(nopermssay);
        
            return;
  
            
        
              }          
              
            
            const say = args.join(" ");
  
            if(!say) return message.reply("Enter a text to say")
       
        message.delete().catch(O_o=>{}); 
       
        message.channel.send(say) 
        
  
        .catch(error => console.log("error_SAY"));

            }
        }