export const updateScoreBack = (players, currentPlayer, max, goodAnswer, setPlayers) => {
  const playerMove = players[currentPlayer].score / 2;
  const rest = max - (players[currentPlayer].score / 2);
  const reduice = goodAnswer - rest;
  const total = playerMove + rest - reduice;

  setPlayers((oldPlayers) => {
    const newPlayers = [...oldPlayers];
    newPlayers[currentPlayer].score = total * 2;
    return newPlayers;
  })
}