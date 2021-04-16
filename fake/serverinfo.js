const Discord = require("discord.js");

module.exports = {
nombre: "serverinfo",
alias: ["infoserver"],
run: async (client, message, args) => {

    var server = message.guild; 
  let guild = message.guild; 
    region = {
      europe: "Europe :flag_eu:",
      brazil: "Brazil :flag_br: ",
      hongkong: "Hong Kong :flag_hk:",
      japan: "Japan :flag_jp:",
      russia: "Russia :flag_ru:",
      singapore: "Singapore :flag_sg:",
      southafrica: "South Africa :flag_za:",
      sydney: "Sydney :flag_au:",
      "us-central": "Central US :flag_us:",
      "us-east": "Este US :flag_us:",
      "us-south": "Sur US :flag_us:",
      "us-west": "Oeste US :flag_us:",
      "vip-us-east": "VIP US Este :flag_us:",
      "eu-central": "Europa Central :flag_eu:",
      "eu-west": "Europa Oeste :flag_eu:",
      london: "London :flag_gb:",
      amsterdam: "Amsterdam :flag_nl:",
      india: "India :flag_in:"
    };
    let icon = message.guild.iconURL({size : 2048, dynamic: true})
  const embed = new Discord.MessageEmbed()
    .setAuthor(server.name, server.iconURL)
    .setDescription(
      `:calendar_spiral: Server created on**${
        guild.createdAt.toDateString().split(" ")[2]
      }/${guild.createdAt.toDateString().split(" ")[1]}/${
        guild.createdAt.toDateString().split(" ")[3]
      }**`
    )
    .addField('Owner ', server.owner.user, true)
    .addField(" ID:", "**" + server.id + "**")
    .addField(` Región:`, `**${region[guild.region]}**`, true)
    .addField(" Members on the server:", "**" + server.memberCount + "**", true)
    .setThumbnail(icon)
    .setColor("GREEN");

  message.channel.send({ embed })

  .catch(error => console.log("error_serverinfo"));

    }
}