import React from 'react';

import { catchAnswer } from '../../../../functions/catchAnswer';

const BooleanCardQuestion = ({ question, answer, setQuestionAnswer, correct, incorrect }) => {
  return (
    <div className="container-booleanCardQuestion" style={{backgroundColor:"antiquewhite", border:"2px solid black"}}>
      <p style={{fontSize:"20px", margin:"10px", marginBottom:"30px"}}>{question}</p>
      <section style={{ fontFamily: 'Courier New', padding:"6px",fontSize:"17px", fontWeight:"600"}}> 
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