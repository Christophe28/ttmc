export const createGameBoard = (
  canvasRef,
  canvasWidth,
  canvasHeight,
  ctx,
  squareSize,
  typeQuestions,
  players,
  radius
) => {
  const canvas = canvasRef;

  // Définir la taille du canvas
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Dessiner le plateau de jeu
  ctx.strokeStyle = "black";
  ctx.strokeRect(0, 0, squareSize * 8, squareSize * 8);

  // Dessiner les cases avec les mots
  ctx.font = "bold 16px 'Courier New'";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  let i = 0;
  let j = 3;

  // Créer les cases
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 8; col++) {
      if (row === 0 || row === 5 || col === 0 || col === 7) {
        const x = col * squareSize;
        const y = row * squareSize;

        if (row === 0 || col === 7) {
          ctx.fillStyle = typeQuestions[i].color;
          ctx.fillRect(x, y, squareSize, squareSize);

          ctx.fillStyle = "black";
          ctx.fillText(
            typeQuestions[i].type,
            x + squareSize / 2,
            y + squareSize / 2
          );
          i === typeQuestions.length - 1 ? (i = 0) : i++;
        }

        if ((row === 5 && x !== 692) || (col === 0 && row !== 0 && row !== 5)) {
          ctx.fillStyle = typeQuestions[j].color;
          ctx.fillRect(x, y, squareSize, squareSize);
          ctx.fillStyle = "black";
          ctx.fillText(
            typeQuestions[j].type,
            x + squareSize / 2,
            y + squareSize / 2
          );
          j === 0 ? (j = 3) : j--;
        }

        if (row === 1 && col === 0) {
          ctx.fillStyle = "#90d4fb";
          ctx.fillRect(x, y, squareSize, squareSize);

          ctx.fillStyle = "black";
          ctx.fillText("End !", x + squareSize / 2, y + squareSize / 2);
        }
      }
    }
  }

  //Créer les pions des joueurs
  // for(let player of players) {
  //   ctx.beginPath();
  //   ctx.arc(player.x, player.y, radius, 0, 2 * Math.PI);
  //   ctx.fillStyle = player.color;
  //   ctx.fill();
  //   ctx.stroke();
  // }

  for (let player of players) {
    const image = new Image();
    image.src = player.color;
    ctx.drawImage(image, player.x, player.y);
  }
};
