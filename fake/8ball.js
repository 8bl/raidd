const Discord = require("discord.js");

module.exports = {
    nombre: "8ball",
    alias: ["magicball"],
    run: (client, message, args) => {
        

        let author7 = message.member;
        const text = args.join(" ")
        var magicball = ["Yes", "No", "¿Why?", "Maybe", "I Dont Know", "Definitely", " ¡Of Course! "," Of Course not"];
        if (!text) return message.reply(`Write a question.`);
        const embed = new Discord.MessageEmbed()
      .setTitle("Magic Ball :crystal_ball:")
      .addField("Question: ", text)
      .addField("Answer: ",  magicball[Math.floor(Math.random() * magicball.length)])
      .setFooter("User: " +  author7)
      .setColor('GREEN')
      message.channel.send(embed)
    
      .catch(error => console.log("error_8ball")) 
    }
    }