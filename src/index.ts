import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { pingData, pingExecute, greetData, greetExecute } from './commands';

dotenv.config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
    console.log(`Interaction received: ${interaction.type}`);
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === pingData.name) {
        await pingExecute(interaction);
    } else if (commandName === greetData.name) {
        await greetExecute(interaction);
    }
});

client.login(process.env.TOKEN);




