import React from 'react';

import { catchAnswer } from '../../../../functions/catchAnswer';

const CardRadio = ({ question, choice, answer, setQuestionAnswer, correct, incorrect }) => {
  
  return (
    <div>
      <p>{question}</p>
      {
        choice.map(elem => (
          <section key={elem}>
            <label htmlFor={elem}>{elem}</label>
            <input type="radio" name="question" id={elem} value={elem} onClick={(e) => {
              if(e.target.value === answer) {
                catchAnswer(setQuestionAnswer, question, answer);
                correct();
              }
              else {
                catchAnswer(setQuestionAnswer, question, answer);
                incorrect();
              }
            }}/>
          </section>
        ))
      }
    </div>
  );
};

export default CardRadio;

