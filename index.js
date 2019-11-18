const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjQ1OTE2MDYyMTUxNDc1MjEz.XdJjbw.dPd1b3p8ALuGcixG8_17jyRQJO0';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message => {
    if (message.content === 'Hi Momo Belia'){
        message.reply('Hello');
    }
});

bot.login(token)
