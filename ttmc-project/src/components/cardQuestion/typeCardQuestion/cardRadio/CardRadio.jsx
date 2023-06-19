import React from 'react';

import { catchAnswer } from '../../../../functions/catchAnswer';

const CardRadio = ({ question, choice, answer, setQuestionAnswer, correct, incorrect }) => {
  
  return (
    <div style={{backgroundColor:"antiquewhite", border:"2px solid black"}}>
      <p style={{fontSize:"20px", margin:"5px"}}>{question}</p>
      {
        choice.map(elem => (
          <section key={elem} style={{ fontFamily: 'Courier New', padding:"6px",fontSize:"17px", fontWeight:"600"}}>
            <label htmlFor={elem}>{elem}</label>
            <input type="radio" name="question" id={elem} value={elem}  onClick={(e) => {
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

