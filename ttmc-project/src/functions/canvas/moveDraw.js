export function moveDraw(setMove, move, setPlayers, currentPlayer, property, value) {
  setPlayers((oldPlayers) => {
    const newPlayers = [...oldPlayers];
    newPlayers[currentPlayer] = {
      ...oldPlayers[currentPlayer],
      [property]: parseInt(oldPlayers[currentPlayer][property].toFixed(0)) + value
    };
    return newPlayers;
  });
  setMove(move + 1);
}