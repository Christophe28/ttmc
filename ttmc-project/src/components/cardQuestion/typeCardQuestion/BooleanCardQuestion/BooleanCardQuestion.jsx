import React from 'react';

import { catchAnswer } from '../../../../functions/catchAnswer';

const BooleanCardQuestion = ({ question, answer, setQuestionAnswer, correct, incorrect }) => {
  return (
    <div className="container-booleanCardQuestion">
      <p>{question}</p>
      <section>
        <input type="radio" name="answer" id="vrai" value="true" onClick={(e) => {
          if(e.target.value === answer) {
            catchAnswer(setQuestionAnswer, question, answer);
            correct();
          }
          else {
            catchAnswer(setQuestionAnswer, question, answer);
            incorrect();
          }
        }}/>
        <label htmlFor="vrai">Vrai !</label>
        <input type="radio" name="answer" id="faux" value="false" onClick={(e) => {
          if(e.target.value === answer) {
            catchAnswer(setQuestionAnswer, question, answer);
            correct();
          }
          else {
            catchAnswer(setQuestionAnswer, question, answer);
            incorrect();
          }
        }}/>
        <label htmlFor="faux">Faux !</label>
      </section>
    </div>
  );
};

export default BooleanCardQuestion;