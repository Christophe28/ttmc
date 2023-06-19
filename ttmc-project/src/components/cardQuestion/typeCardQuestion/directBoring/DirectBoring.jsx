import React, { useState } from 'react';

import { catchAnswer } from '../../../../functions/catchAnswer';
import { calculateLevenshteinDistance } from '../../../../functions/levenshteinDistance';
import { isLvDistance } from "../../../../functions/cardQuestion/conditions";

import Button from '../../../button/Button';

const DirectBoring = ({ question, answer, setQuestionAnswer, correct, incorrect }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [checkWord, setCheckWord] = useState();

  return (
    <div>
      {/* <h1>Direct boring</h1> */}
      <p>{question}</p>
      <section>
        <input 
          type="text" 
          value={userAnswer} 
          onChange={(e) => {
            setUserAnswer(e.target.value);
            const lvDistance = answer.filter(elem => Math.max(calculateLevenshteinDistance(userAnswer.toString().toLowerCase(), elem.toString().toLowerCase()) <= 7));
            const convertLvDistanceToNumber = calculateLevenshteinDistance(userAnswer.toString().toLowerCase(), lvDistance.toString().toLowerCase());
            setCheckWord(convertLvDistanceToNumber);
          }} 
          onKeyUp={(e) => {
            if(e.key === "Enter") {
              if(isLvDistance(checkWord)) {
                catchAnswer(setQuestionAnswer, question, answer);
                correct();
                setUserAnswer("");
              }
              else {
                incorrect();
              }
            }
          }}
        />
        <Button
          value="Valider"
          className="button"
          onClick={() => {
            catchAnswer(setQuestionAnswer, question, answer);
            if(isLvDistance(checkWord)) {
              correct();
              setUserAnswer("");
            }
            else {
              incorrect();
            }
          }}
        />
      </section>
    </div>
  );
};

export default DirectBoring;