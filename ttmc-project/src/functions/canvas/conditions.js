// check autorisation to move
export const allCorrect = (betQuestion, goodAnswer) => {
  return parseInt(betQuestion) > 0 && parseInt(goodAnswer) === parseInt(betQuestion);
}

export const endMove = (move, squareSize, goodAnswer) => {
  return move > (squareSize * goodAnswer);
}

// check endBoard
export const endBoard = (x, xLast, y, yLast) => {
  return x === xLast && y === yLast
}

// Move conditions
export const leftToRigth = (x, xMax, y, yStart) => {
  return x < xMax && y === yStart
}

export const topToBot = (x, xMax, y, yMax) => {
  return x === xMax && y < yMax;
}

export const rigthToLeft = (x, xLast, y, yMax) => {
  return x > xLast && y === yMax
}

export const backTopToBot = (y, yLast, squareSize, nbrSquare) => {
  return y >= yLast + (squareSize * nbrSquare);
}

export const endGame = (score, goodAnswer) => {
  return (score / 2) + 1 === 24 && goodAnswer === 1;
}