console.log('Conectando...');
const Discord = require('discord.js');
const client = new Discord.Client();
const preferencias = require('./config.json');
const prefix = preferencias.prefix;
const prefixow = preferencias.prefixow;
const fs = require('fs');
var comandos = new Discord.Collection();


let loop = require(`./lockfeio.js`);
loop.run(client);

client.login(process.env.BattleTOKEN);


client.on('ready', () =>{
console.log('\n==============================');
console.log('CONECTADO! BOT ONLINE!');
console.log(`O meu prefixo � ${prefix}`);
console.log('==============================');


//let gameloop = require(`./comando_kally/gameloop.js`);
//gameloop.run(client);
  
});

client.on("guildMemberRemove", member =>{
    if(member.guild.id === "414953352422490113"){
        const leave = new Discord.RichEmbed()
        .setAuthor(member.user.tag)
        .setDescription(":outbox_tray: Ele estava usando cheat e foi banido :(!")
        .setThumbnail(member.user.avatarURL)
        .setColor("#36393f")
        .setFooter("Battle BOT - copyright")
      client.channels.get("415171650980675604").send(leave)

    }
});

client.on("guildMemberAdd", member =>{
    if(member.guild.id === "414953352422490113"){
        const join = new Discord.RichEmbed()
        .setAuthor(member.user.tag)
        .setDescription(":inbox_tray: Foi puxado para o maior grupo de Leaker's Brasileiro!")
        .setThumbnail(member.user.avatarURL)
        .setColor("#36393f")
        .setFooter("Battle BOT - copyright")
      client.channels.get("415171650980675604").send(join)
      
    }
    });

    client.on("guildMemberAdd", member => {
      if(member.guild.id == "414953352422490113"){
          const channel = member.guild.channels.get("469960067513450506");
          channel.setName(`Membros: ${member.guild.memberCount - member.guild.members.filter(m=>m.user.bot).size}`)
      }
  });
  
  
  client.on("guildMemberRemove", member => {
      if(member.guild.id == "414953352422490113"){
          const channel = member.guild.channels.get("469960067513450506");
          channel.setName(`Membros: ${member.guild.memberCount - member.guild.members.filter(m=>m.user.bot).size}`)
      }
	  
	 
	  
  });
client.on('message', message =>{
  if(message.content.includes("https://discord.gg/")){
      message.delete()
      if(message.channel.id != "424422351204253700") return message.reply(`${message.author}, Neste grupo, é proibido à divulgação de convites de outros grupos!`)
  }

client.user.setStatus('dnd')

client.user.setGame('um tijolinho no Igor!')
})
client.on('message', message =>{
        if(message.content.includes("https://discord.gg/")){
                if(message.channel.id === "443945943344087051"){
                        return;
                }else{
                    message.delete()
	message.channel.send(`${message.author}, você não pode divulgar links de outros grupos!`)
    }
	}
}
})
;



client.on("error", e => console.log(e));




client.on('message', message =>{

var autor = message.author;
var msg = message.content.toUpperCase();
var cont = message.content.slice(prefix.lenght).split('');
  
if(message.channel.type === "dm") return;
if(!message.content.startsWith(prefix)) return;
// ban
//if(message.author.id === "244537374258888725" || message.author.id === "244537374258888725") return;
//if(message.author.id === "244537374258888725") return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const allargs = args.join(" ");
  
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
	  
	  
   } catch (err) {
     
     message.channel.send(`:question: **|** ${message.author} comando inexistente, Irineu,  você não sabe nem eu **;D**`).then(msg => msg.delete(5000));
	   return;
   }
  
});
