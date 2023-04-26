export function correctAnswer(goodAnswer, setGoodAnswer, currentQuestion, setCurrentQuestion, bet) {  
  currentQuestion < bet - 1 ? setCurrentQuestion(currentQuestion + 1) : "";
  setGoodAnswer(goodAnswer + 1);
}