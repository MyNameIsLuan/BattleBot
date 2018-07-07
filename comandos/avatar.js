const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   let member = message.mentions.members.first();
   
   // se marcar um user
   if(member) {
     
   const avatar = new Discord.RichEmbed()
      
      .setTitle("?? Avatar de " + `${member.user.username}`)
      .setDescription(`**Clique [aqui](${member.user.avatarURL}) para baixar a imagem!**`)
      .setImage(member.user.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kally????")
   
      message.channel.send(avatar)
   
   } else {
    
   // se não marcer um user
  
   const avatar = new Discord.RichEmbed()
      .setTitle("?? Avatar de " + `${message.author.username}`)
      .setDescription(`**Clique [aqui](${message.author.avatarURL}) para baixar a imagem!**`)
      .setImage(message.author.avatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kally????")
   
      message.channel.send(avatar)
      
   }
}