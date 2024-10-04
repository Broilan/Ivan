//run to update ---> npx ts-node src/deploy-commands.ts

import { REST, Routes } from 'discord.js';
import * as dotenv from 'dotenv';
import { pingData, greetData, latexData } from './commands'; 

dotenv.config();

const commands = [
    pingData.toJSON(),
    greetData.toJSON(),
    latexData.toJSON(),
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN!);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID!),
            { body: commands }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();


