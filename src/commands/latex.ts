import { SlashCommandBuilder, CommandInteraction, ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('latex')
  .setDescription('Convert LaTeX equation to an image')
  .addStringOption(option =>
    option.setName('equation')
      .setDescription('The LaTeX equation to convert')
      .setRequired(true));

      export const execute = async (interaction: CommandInteraction | ChatInputCommandInteraction) => {
        if (!interaction.isChatInputCommand()) return;
      
        const latex = interaction.options.getString('equation');
        if (!latex) {
          await interaction.reply('Please provide a LaTeX equation.');
          return;
        }
      
        try {
          await interaction.deferReply(); 
          
          const imageUrl = generateEquationImageUrl(latex);
          console.log(`Generated Image URL: ${imageUrl}`);
      
          // Send the image directly instead of using an embed
          await interaction.editReply({ content: imageUrl });
      
        } catch (error) {
          console.error('Error generating equation image:', error);
          if (!interaction.replied) {
            await interaction.editReply('Sorry, there was an error generating the equation image.');
          }
        }
      };

      function generateEquationImageUrl(latex: string): string {
        const encodedLatex = encodeURIComponent(`\\huge\\bg{black}${latex}`);
        return `https://latex.codecogs.com/png.image?${encodedLatex}`;
    }