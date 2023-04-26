export function catchAnswer(setQuestionAnswer, question, answer) {
  setQuestionAnswer((oldQuestionAnswer) => {
    const newQuestionAnswer = [...oldQuestionAnswer, 
      {
        id: oldQuestionAnswer.length + 1,
        question: question,
        answer: answer
      }
    ]
    return newQuestionAnswer;
  })
}