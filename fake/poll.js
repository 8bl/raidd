const Discord = require("discord.js");


module.exports = {
nombre: "poll",
alias: ["question"],
run: async (client, message, args) => {

    const pollmessage = args.join(" ");

if(!pollmessage) { 
    
    message.channel.send("Add a message.")
return;
}

    
    let embed = new Discord.MessageEmbed() 
       .setAuthor('Poll:')
       .setDescription('**'+ pollmessage +"**")
       .addField('Optión 1', '👍 Yes')
       .addField('Optión 2', '👎 No')
       .setColor("GREEN")
    
 
  message.channel.send(embed) 
  .then(m => {
         m.react("👍");
         m.react("👎");
 
         

   })

   .catch(error => console.log(`error_poll`));
    }
    }