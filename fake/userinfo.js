const Discord = require("discord.js");

module.exports = {
nombre: "infouser",
alias: ["userinfo"],
run: async (client, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; // Definimos usuario, si mencionamos a alguien se obtendra su informacion, si no mencionamos a nadie se obtendra la informacion de "Nosotros"
  
          let status; 
          switch (user.presence.status) {
              case "online":
                  status = "🟢 Online";
                  break;
              case "dnd":
                  status = "⛔ No disturb";
                  break;
              case "idle":
                  status = "🌙 Idle";
                  break;
              case "offline":
                  status = "⚪ Offline";
                  break;
          }
  
          const embed = new Discord.MessageEmbed() 
              .setTitle(`These are the data of  ${user.user.username}`) 
              .setColor("GREEN")
              .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
              .addFields(
                  {
                      name: " Nickname: ",
                      value: message.member.nickname ? message.member.nickname : "No Nickname", 
                      inline: true 
                  },
                  {
                      name: " ID: ",
                      value: user.user.id,
                  },
                  {
                      name: " Activity: ",
                      value: status,
                      inline: true
                  },
                  
                  {
                      name: ' Account created on: ',
                      value: user.user.createdAt.toLocaleDateString("es-pe"),
                      inline: true
                  },
                  {
                      name: ' Join Data: ',
                      value: user.joinedAt.toLocaleDateString("es-pe"),
                      inline: true
                  },
                  {
                      name:"Booster Status:",
                      value: user.premiumSince ? 'Booster' : 'Looser'

                  },
                  {
                      name: 'Has the roles: ',
                      value: user.roles.cache.map(role => role.toString()).join(" == "),
                      inline: true
                  }
              )
  
          await message.channel.send(embed)
          .catch(error => console.log("error_USERINFO"));
                }
            }

