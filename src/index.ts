import { Client, GatewayIntentBits, Interaction, CommandInteraction } from 'discord.js';
import * as dotenv from 'dotenv';
import { pingData, pingExecute, greetData, greetExecute, latexData, latexExecute } from './commands';

dotenv.config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('interactionCreate', async (interaction: Interaction) => {
    console.log(`Interaction received: ${interaction.type}`);
    
    // Check if the interaction is a command interaction
    if (!interaction.isCommand()) return;

    // Now TypeScript understands that interaction is a CommandInteraction
    const commandInteraction = interaction as CommandInteraction;
    console.log(`Command: ${commandInteraction.commandName}`); // Log the command name

    switch (commandInteraction.commandName) {
        case pingData.name:
            await pingExecute(commandInteraction);
            break;
        case greetData.name:
            await greetExecute(commandInteraction);
            break;
        case latexData.name:
            await latexExecute(commandInteraction);
            break;
        default:
            console.log(`Unknown command: ${commandInteraction.commandName}`);
            break;
    }
});

client.login(process.env.TOKEN);






