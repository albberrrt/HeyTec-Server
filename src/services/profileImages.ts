import { createCanvas, registerFont } from 'canvas';
import fs from 'fs';

function pipipipopopo() {
    // Registra a fonte Montserrat
    registerFont('public/fonts/Montserrat-SemiBold.ttf', { family: 'Montserrat' });

    const alphabetic = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < 26; i++){
        generateImage(alphabetic.charAt(i));
    }
}

function generateImage(letter: string) {
    // Define a cor de fundo da imagem
  const backgroundColor = "#34323E";

  // Define a largura e a altura da imagem
  const width = 300;
  const height = 300;

  // Cria o canvas
  const canvas = createCanvas(width, height);

  // Define o contexto do canvas
  const ctx = canvas.getContext("2d");

  // Define a cor de fundo do canvas
  ctx.fillStyle = backgroundColor;

  // Preenche o canvas com a cor de fundo
  ctx.fillRect(0, 0, width, height);

  // Define a cor da letra
  ctx.fillStyle = "#ffffff";

  // Define a fonte e o tamanho da letra
  ctx.font = "212px Montserrat";

  // Obtém as dimensões do texto
  const textWidth = ctx.measureText(letter).width; // Altura aproximada da letra "M"

  // Define a posição do texto no centro da imagem
  const x = width / 2 + 60 / 2 - 30;
  const y = height / 2 + 212 / 2 - 30;

  // Centraliza o texto horizontalmente
  ctx.textAlign = "center";

  // Desenha o texto no canvas
  ctx.fillText(letter, x, y);

  // Salva a imagem em formato PNG
  const buffer = canvas.toBuffer("image/png");

  fs.writeFileSync(`public/profile-images/default/${letter}.png`, buffer);
}

pipipipopopo();