const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
    message.delete().catch(O_o=>{});
    message.reply(`enviei as cargos disponiveis para você selecionar!`).then(msg => msg.delete(6000));
    let role1 = message.guild.roles.find("name", "🌿Maconheiro🌿");
    let role2 = message.guild.roles.find("name", "😅MEMED😅");
    let role3 = message.guild.roles.find("name", "🔫GANGMEMBER 🐲");
    let role4 = message.guild.roles.find("name", "⚔BadlionClient-User⚔");
    let role5 = message.guild.roles.find("name", "🎇Cheatbreaker-User🎆");
    let role6 = message.guild.roles.find("name", "👄LOLI👄");
    let role7 = message.guild.roles.find("name", "💘GRINGO 💘");
    let role8 = message.guild.roles.find("name", "🔫🔫BLATANT🔫🔫");
    let role9 = message.guild.roles.find("name", "🐱‍🚀Disney🐱‍🚀");
    let role10 = message.guild.roles.find("name", "👸GAY👸");
    let role11 = message.guild.roles.find("name", "♪MC♪");
    let role12 = message.guild.roles.find("name", "💥SUPREME💥");

    const categoria = new Discord.RichEmbed()
    .setAuthor("Selecione um cargo!")
    .setDescription("\n\n🌱 Maconheiro;\n😅 Memed\n🐲 Gangmember\n⚔ BadlionClient-User\n🎇 Cheatbreaker-User\n👄 LOLI")
    message.author.send(categoria).then(msg=> {
        msg.react("🌿").then(r => {
            msg.react("😅")
            msg.react("🐲")
            msg.react("🎇")
            msg.react("👄")
            msg.react("⚔")
            msg.react("⏩")
        
            const maconheiro = (reaction, user) => reaction.emoji.name === '🌿' && user.id === message.author.id;
            const memed = (reaction, user) => reaction.emoji.name === '😅' && user.id === message.author.id;
            const gangmember = (reaction, user) => reaction.emoji.name === '🐲' && user.id === message.author.id;
            const badlionclient = (reaction, user) => reaction.emoji.name === '⚔' && user.id === message.author.id;
            const Cheatbreaker = (reaction, user) => reaction.emoji.name === '🎇' && user.id === message.author.id;
            const loli = (reaction, user) => reaction.emoji.name === '👄' && user.id === message.author.id;
            const cate2 = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

            const maconheirol = msg.createReactionCollector(maconheiro, { time: 60000 });
            const gangmemberl = msg.createReactionCollector(gangmember, { time: 60000 });
            const badlionclientl = msg.createReactionCollector(badlionclient, { time: 60000 });
            const Cheatbreakerl = msg.createReactionCollector(Cheatbreaker, { time: 60000 });
            const lolil = msg.createReactionCollector(loli, { time: 60000 });
            const memedl = msg.createReactionCollector(memed, { time: 60000 });
            const cate2l = msg.createReactionCollector(cate2, { time: 60000 });

            maconheirol.on('collect', r=> {
                message.member.addRole(role1.id)
                message.author.send("Você escolheu o cargo 🌿 **__Maconheiro__**")
            })
            memedl.on('collect', r=> {
                message.member.addRole(role2.id)
                message.author.send("Você escolheu o cargo 😅 **__Memed__**")
            })
            badlionclientl.on('collect', r=> {
                message.member.addRole(role4.id)
                message.author.send("Você escolheu o cargo ⚔ **__BadlionClient User__**")
            })
            gangmemberl.on('collect', r=> {
                message.member.addRole(role3.id)
                message.author.send("Você escolheu o cargo 🐲 **__GangMember__**")
            })
            Cheatbreakerl.on('collect', r=> {
                message.member.addRole(role5.id)
                message.author.send("Você escolheu o cargo 🎇 **__CheatBreaker User__**")
            })
            lolil.on('collect', r=> {
                message.member.addRole(role6.id)
                message.author.send("Você escolheu o cargo 👄 **__Loli__**")
            })
            cate2l.on('collect', r=> {
                msg.delete().catch(O_o=>{});
                const categoria2 = new Discord.RichEmbed()
                    .setAuthor("Selecione um cargo!")
                    .setDescription("\n💘 Gringo\n🔫 Blatant\n🚀 Disney\n👸 GAY\n🎤 MC\n💥 Supreme\n")
                message.author.send(categoria2).then(msg=> {
                    msg.react("💘").then(r => {
                    msg.react("🔫")
                    msg.react("🚀")
                    msg.react("👸")
                    msg.react("🎤")
                    msg.react("💥")
            })

            const gringo = (reaction, user) => reaction.emoji.name === '💘' && user.id === message.author.id;
            const blatant = (reaction, user) => reaction.emoji.name === '🔫' && user.id === message.author.id;
            const disney = (reaction, user) => reaction.emoji.name === '🚀' && user.id === message.author.id;
            const gay = (reaction, user) => reaction.emoji.name === '👸' && user.id === message.author.id;
            const mc = (reaction, user) => reaction.emoji.name === '🎤' && user.id === message.author.id;
            const supreme = (reaction, user) => reaction.emoji.name === '💥' && user.id === message.author.id;

            const gringol = msg.createReactionCollector(gringo, { time: 60000 });
            const blatantl = msg.createReactionCollector(blatant, { time: 60000 });
            const disneyl = msg.createReactionCollector(disney, { time: 60000 });
            const gayl = msg.createReactionCollector(gay, { time: 60000 });
            const mcl = msg.createReactionCollector(mc, { time: 60000 });
            const supremel = msg.createReactionCollector(supreme, { time: 60000 });

            gringol.on('collect', r=> {
                message.member.addRole(role7.id)
                message.author.send("Você escolheu o cargo 💘 **__Gringo__**")
            })
            blatantl.on('collect', r=> {
                message.member.addRole(role8.id)
                message.author.send("Você escolheu o cargo 🔫 **__Blatant__**")
            })
            disneyl.on('collect', r=> {
                message.member.addRole(role9.id)
                message.author.send("Você escolheu o cargo 🚀 **__Disney__**")
            })
            gayl.on('collect', r=> {
                message.member.addRole(role10.id)
                message.author.send("Você escolheu o cargo 👸 **__Gay__**")
            })
            mcl.on('collect', r=> {
                message.member.addRole(role11.id)
                message.author.send("Você escolheu o cargo 🎤 **__MC__**")
            })
            supremel.on('collect', r=> {
                message.member.addRole(role12.id)
                message.author.send("Você escolheu o cargo 💥 **__Supreme__**")
            })

})
})
})
})
}
