export const nextPlayer = (currentPlayer, players, setCurrentPlayer) => {
  return currentPlayer === players.length - 1 ? setCurrentPlayer(0) : setCurrentPlayer(currentPlayer + 1);
}