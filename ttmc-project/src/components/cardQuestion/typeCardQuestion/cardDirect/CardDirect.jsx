import React, { useState} from 'react';

import { catchAnswer } from '../../../../functions/catchAnswer';
import { calculateLevenshteinDistance } from '../../../../functions/levenshteinDistance';
import { isLvDistance } from "../../../../functions/cardQuestion/conditions";

import Button from "../../../button/Button";

const CardDirect = ({ question, answer, setQuestionAnswer, correct, incorrect }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [checkWord, setCheckWord] = useState();

  return (
    <div>
      <p>{question}</p>
      <section>
        <input 
          type="text" 
          value={userAnswer}
          onChange={(e) => {
            const leveinshteinDistance = calculateLevenshteinDistance(userAnswer.toString().toLowerCase(), answer.toString().toLowerCase());
            setUserAnswer(e.target.value)
            setCheckWord(leveinshteinDistance);
            console.log("checkWord ==>", checkWord);
          }}
          onKeyUp={(e) => {
            if(e.key === "Enter") {
              if(isLvDistance(checkWord, 5)) {
                console.log("bite");
                catchAnswer(setQuestionAnswer, question, answer);
                correct();
                setUserAnswer("");
              }
              else {
                catchAnswer(setQuestionAnswer, question, answer);
                incorrect();     
              }
            }
          }} 
        />
        <Button 
          value="Valider" 
          className="button"
          onClick={(e) => {
            if(isLvDistance(checkWord, 5)) {
              catchAnswer(setQuestionAnswer, question, answer);
              correct();
              setUserAnswer("");
            }
            else {
              catchAnswer(setQuestionAnswer, question, answer);
              incorrect();
            }
          }}
        />
      </section>

    </div>
  );
};

export default CardDirect;