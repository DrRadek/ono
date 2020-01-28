const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const fs = require('fs');
const client = new Discord.Client();



client.once('ready', () => {
	console.log('ready');
});
client.on('message', message => {
	console.log(message.content);
	if (message.author.bot) return;
	if (message.content === `oňo` || message.content === `Oňo` || message.content === `OŇO`) {
		message.channel.send(`> Oňo znamená cibule :onion:`);
	}
	if (message.content === `pes` || message.content === `Pes` || message.content === `Pes`) {
		message.channel.send(`Pff.. Radši košiškuu`);
	}
	if (message.content === `anime` || message.content === `Anime` || message.content === `ANIME`) {
		message.channel.send(`Anime? To carnille nerad`);
	}
	if (message.content === `Jaká je nejlepší restaurace?` || message.content === `jaká je nejlepší restaurace?` || message.content === `restaurace`) {
		message.channel.send(`Nejlepší restaurace je občerstvení u Nikoly`);
	}
	if (message.content === `oňohelp`) {
		message.channel.send(`Neřeknu!\nNajdi si svoje oňa sám!!!`);
		
	}
	
});
client.login('NjcxNzE2NjE0Mjk4NjY0OTgz.XjA_xA.5FGHGH_eMv4Gu_ieae3LnO4iQkw');
