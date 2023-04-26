export function badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper) {
  setGoodAnswer(0);
  currentPlayer === players.length - 1 ? setCurrentPlayer(0) : setCurrentPlayer(currentPlayer + 1);
  setCurrentQuestion(0);
  setBet(0);
  setDisplayQuestions(false);
  setDisplayWrapper(true);
}