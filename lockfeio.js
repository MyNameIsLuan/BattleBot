const Discord = require('discord.js');
module.exports.run = async (client) =>{

    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("O loop ativado!")

    for (i=0; i<10;){
        await sleep(7200000)

    const mensagem1 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")

            .setDescription("Visite o canal do dono do nosso servidor Discord!\n[Clique Aqui](https://www.youtube.com/channel/UCwSEW7yfnOyn882P7DyjDFw)\n\nSuper recomendo! :smiley:")
           
            .setTimestamp()
            .setFooter(`Mensagem Automática!`)

    client.channels.get("417002847541002243").send(mensagem1);
    

    await sleep(7200000)

    const mensagem2 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")

            .setDescription("Visite o canal de nossoas amigos do grupo! Discord!\n[Clique Aqui](https://www.youtube.com/channel/UCBPZQ-U1ZSonWGpQNH51i0Q)\n\nSuper recomendo! :smiley:")
           
            .setTimestamp()
            .setFooter(`Mensagem Automática!`)

    client.channels.get("417002847541002243").send(mensagem2);

    await sleep(7200000)

    const mensagem3 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")

            .setDescription("Visite o canal de nossoas amigos do grupo! Discord!\n[Clique Aqui](https://www.youtube.com/channel/UCV6PwoUmkN5l-zf-kL7k9lw)\n\nSuper recomendo! :smiley:")
           
            .setTimestamp()
            .setFooter(`Mensagem Automática!`)

    client.channels.get("417002847541002243").send(mensagem3);

    await sleep(7200000)

    const mensagem4 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")

            .setDescription("Visite o canal de nossoas amigos do grupo! Discord!\n[Clique Aqui](https://www.youtube.com/channel/UC2xDkVqAg3R8B18BZuU6WUA)\n\nSuper recomendo! :smiley:")
           
            .setTimestamp()
            .setFooter(`Mensagem Automática!`)

    client.channels.get("417002847541002243").send(mensagem4);
    
    await sleep(7200000)

    const mensagem5 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")

            .setDescription("Visite o canal de nossoas amigos do grupo! Discord!\n[Clique Aqui](https://www.youtube.com/channel/UCwSEW7yfnOyn882P7DyjDFw)\n\nSuper recomendo! :smiley:")
           
            .setTimestamp()
            .setFooter(`Mensagem Automática!`)

    client.channels.get("417002847541002243").send(mensagem5);
    
    
    }
}