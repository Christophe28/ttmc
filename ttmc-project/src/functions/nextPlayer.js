export const nextPlayer = (currentPlayer, players, setCurrentPlayer) => {
  return currentPlayer === players.length - 1 ? setCurrentPlayer(0) : setCurrentPlayer(currentPlayer + 1);
}

export const nextAssPlayer = (currentPlayer, players) => {
  return currentPlayer === players.length - 1 ? 0 : currentPlayer + 1;
}