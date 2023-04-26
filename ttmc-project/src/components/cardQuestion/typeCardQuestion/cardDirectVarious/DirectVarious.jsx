  import React, { useState } from 'react';

  import { catchAnswer } from '../../../../functions/catchAnswer';
  import { calculateLevenshteinDistance } from '../../../../functions/levenshteinDistance';
  import { isLvDistance } from "../../../../functions/cardQuestion/conditions";

  import Button from '../../../button/Button';

  const DirectVarious = ({ question, answer, setQuestionAnswer, correct, incorrect }) => {
    const [userAnswer, setUserAnswer] = useState("");
    const [checkWord, setCheckWord] = useState("");

    // expression régulière pour vérifier si la chaîne de caractères contient une virgule
    const regex = /,/;

    return (
      <div>
        <h1>Direct Various</h1>
        <p>{question}</p>
        <section>
          <input 
            type="text" 
            onChange={(e) => {
              const leveinshteinDistance = calculateLevenshteinDistance(userAnswer.toLowerCase(), answer.sort().join(", ").toString().toLowerCase());
              setUserAnswer(e.target.value);
              if(regex.test(userAnswer)) {
                const lowCase = userAnswer.toLowerCase();
                const split = lowCase.split(", ");
                const sort = split.sort();
                const myToString = sort.toString().toLowerCase();
                const leveinshteinDistance2 = calculateLevenshteinDistance(myToString, answer.sort().join(", ").toString().toLowerCase());
                setCheckWord(leveinshteinDistance2);
                console.log("score ==>", leveinshteinDistance2);
                console.log("réponse ==>", myToString);
              }
            }}
            onKeyUp={(e) => {
              if(e.target.value === "Enter") {
                if(isLvDistance(checkWord)) {
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
            value={userAnswer}
          />
          <button onClick={() => {
            if(isLvDistance(checkWord)) {
              catchAnswer(setQuestionAnswer, question, answer);
              correct();
              setUserAnswer("");
            }
            else {
              catchAnswer(setQuestionAnswer, question, answer);
              incorrect();
          
            }
          }}>
            Valider la réponse
          </button>
          <Button 
            value="Valider la réponse"
            className="button"
            onClick={() => {
              if(checkWord <= 7) {
                catchAnswer(setQuestionAnswer, question, answer);
                correct();
                setUserAnswer("");
              }
              else {
                incorrect();
              }
            }}
          />

          <button onClick={() => {
            console.log(answer.sort().join(",").toString().toLowerCase());
          }}> 
            Tableau trié
          </button>
        </section>
      </div>
    );
  };

  export default DirectVarious;
