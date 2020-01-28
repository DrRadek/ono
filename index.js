const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {
	console.log('ready');
});
client.on('message', message => {
	console.log(message.content);
	if (message.author.bot) return;
	const args = message.content.slice(prefix.length).split(' ');
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
	
});
client.login(process.env.BOT_TOKEN);
