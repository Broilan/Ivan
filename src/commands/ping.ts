import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

export const execute = async (interaction: any) => {
    await interaction.reply('Pong!');
};
