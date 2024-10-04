import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('greet')
    .setDescription('Greets the user with Hello, Tanner!');

export const execute = async (interaction: any) => {
    await interaction.reply('Hello, Tanner!');
};
