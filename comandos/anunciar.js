const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
    if(!message.members.find(val => val.id === "368111860735541248")) {
        message.delete();
        message.reply("Apenas o ImLuan pode usar este comando!");
        return;
    }

    let anuncio = message.content.split(' ').slice(1).join(' ');
    let canal = message.member.guild.channels.get('416266127103229972');

    const announceembed = new Discord.RichEmbed()
    .setAuthor('BattleBOT', client.user.avatarURL)
    .setColor('00FFFF')
    .addField("Anúncio:", `${anuncio}`)
    .addField("Por:", `${message.author}`)
    .setFooter('BattleBot ')
    .setTimestamp();
    message.delete();
    canal.send(announceembed);
    console.log("O Luan fez o seguinte anuncio: ".green +`${anuncio}`.green);


}
