const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {
	console.log('ready');
});
client.on('message', message => {
	console.log(message.content);
	if (message.author.bot) return;
	const args = message.content.split(' ');
	const command = args.shift().toLowerCase();
	if (command === `oňo`) {
		message.channel.send(`> Oňo znamená cibule :onion:`);
	}
	if (command === `pes`) {
		message.channel.send(`Pff.. Radši košiškuu`);
	}
	if (command === `anime`) {
		message.channel.send(`Anime? To carnille nerad`);
	}
	if (command === `jaká je nejlepší restaurace?` || command === `restaurace`) {
		message.channel.send(`Nejlepší restaurace je občerstvení u Nikoly`);
	}
	if (command === `oňohelp`) {
		message.channel.send(`Neřeknu!\nNajdi si svoje oňa sám!!!`);
		
	}
	if (command === `:retardpoo:` || command === `<:retardpoo:671441317519294474>`) {
		message.channel.send(`<:retardpoo:671441317519294474>`);
		
	}
	if (command === `dafyt` || command === `dafti` || command == `<@!498531178266230784>`) {
		message.channel.send(`To je ten prezident ne?`);
		message.channel.send(`<:dafyt:671764881468424192>`);
	}
	if(command === `jirkaa` || command === `jirka` || command === `zdenda` || command === `zdeněk`){
		message.channel.send(`C..o t-o j-e t-e-n za--seka--nec?`)
	}
	if(command === `cs:go` || command === `csko` || command === `cs`){
		message.channel.send(`https://www.youtube.com/watch?v=ZjCVwfJTELY`)
	}
	if(command === `lol` || command === `lolko`){
		message.channel.send(`Lolko tu není zakázané! Užívej`)
	}
	if(command === `oňák`){
		message.channel.send(`Ahoj, já jsem oňák, tvoje osobní oňo.\nNa Dej si<:ono:671441790704025611>`)
	}
	
});
client.login(process.env.BOT_TOKEN);
