import { REST, Routes } from 'discord.js';
import * as dotenv from 'dotenv';
import { data as pingData } from './commands/ping';  // Adjust path if needed
import { data as greetData } from './commands/greet';  // Adjust path if needed

dotenv.config();

const commands = [
    pingData.toJSON(),  // Ensure you are calling toJSON() correctly
    greetData.toJSON(),
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


