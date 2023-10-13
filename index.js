// From tut: https://brianmorrison.me/blog/building-a-hello-world-discord-bot/
// Intents from: https://stackoverflow.com/a/73075344/505829
// To run, open terminal, and execute `node index.js`
// For intents https://stackoverflow.com/a/74151035/505829
// To run watch, use npm start

// Package to get value from .env
require('dotenv').config();

// Create client and connect
const prefix = '!';
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessageTyping,
    ]
});
client.login(process.env.DISCORD_BOT_TOKEN);

// Once it boots up, echo that its running
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// When a message is created
client.on('messageCreate', async message => {
    // Ensure bot doesn't loop on itself
    if (message.author.bot) {
        return;
    }

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        // If the command is 'clear', try to clear the messages in the channel
        if (command === 'clear') {

            // Check if the user has permission to manage messages
            if (message.member.permissions.has("MANAGE_MESSAGES")) {

                // Get the number of messages to delete from the arguments, or default to 100
                const amount = args[0] ? parseInt(args[0]) : 100;

                // Validate the amount
                if (isNaN(amount)) {
                    return message.reply('please enter a valid number of messages to delete.');
                } else if (amount < 1 || amount > 100) {
                    return message.reply('please enter a number between 1 and 100.');
                }

                // Delete the messages using bulkDelete method
                message.channel.bulkDelete(amount, true)
                    .then(deleted => message.channel.send(`Deleted ${deleted.size} messages.`))
                    .catch(error => message.channel.send(`There was an error deleting messages: ${error}`));
            } else {
                
                // If the user does not have permission, send a message
                return message.reply('you do not have permission to delete messages.');
            }
        }
    }
});
