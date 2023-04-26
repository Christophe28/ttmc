export const displayElem = (condition, firstClass, secondClass) => {
  return condition ? firstClass : secondClass
}

export const isLvDistance = (checkWord) => {
  return parseInt(checkWord) <= 5
}