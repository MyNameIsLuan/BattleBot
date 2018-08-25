const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
   if(message.member.id != "368111860735541248") {
        message.delete();
        message.reply("Apenas o ImLuan pode usar este comando!");
        return;
    }
   
    let anuncio = message.content.split(' ').slice(1).join(' ');
    message.channel.send(anuncio)


}
