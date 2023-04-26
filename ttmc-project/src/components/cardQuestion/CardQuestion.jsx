// React
import React, { useState } from 'react';

// Component
import CardDirect from './typeCardQuestion/cardDirect/CardDirect';
import BooleanCardQuestion from './typeCardQuestion/BooleanCardQuestion/BooleanCardQuestion';
import DirectVarious from './typeCardQuestion/cardDirectVarious/DirectVarious';
import DirectBoring from './typeCardQuestion/directBoring/DirectBoring';
import CardRadio from './typeCardQuestion/cardRadio/CardRadio';

// Config
import { howQuestionsCanAnswer, typeQuestions } from '../../config/config';
import { correctAnswer } from '../../functions/correctAnswer';
import { badAnswer } from '../../functions/badAnswer';

// Functions
import { displayElem } from '../../functions/cardQuestion/conditions';
import { checkColor } from '../../functions/cardQuestion/checkColor';

const CardQuestion = ({data, players, currentPlayer, setCurrentPlayer, setGoodAnswer, goodAnswer, bet, setBet, setBetQuestion, currentQuestion, setCurrentQuestion, displayQuestions, setDisplayQuestions, setDisplayWrapper}) => {
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const [display, setDisplay] = useState(false);

  const { question, answer, choices, type, number } = data.questions[currentQuestion];

  console.log(data.main_theme);
  const typeCards = [
    {
      id: 1,
      type: "direct",
      component: <CardDirect
                  question={question} 
                  answer={answer}
                  setQuestionAnswer={setQuestionAnswer}
                  correct={() => correctAnswer(goodAnswer, setGoodAnswer, currentQuestion, setCurrentQuestion, bet)}
                  incorrect={() => badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper)}
                />
    },
    {
      id: 2,
      type: "boolean",
      component: <BooleanCardQuestion
                  question={question}
                  answer={answer}
                  setQuestionAnswer={setQuestionAnswer}
                  correct={() => correctAnswer(goodAnswer, setGoodAnswer, currentQuestion, setCurrentQuestion, bet)}
                  incorrect={() => badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper)}
                />
    },
    {
      id: 3,
      type: "directVarious",
      component: <DirectVarious 
                  question={question} 
                  answer={answer} 
                  setQuestionAnswer={setQuestionAnswer}
                  correct={() => correctAnswer(goodAnswer, setGoodAnswer, currentQuestion, setCurrentQuestion, bet)}
                  incorrect={() => badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper)}
                />
    },
    {
      id: 4,
      type: "directBoring",
      component: <DirectBoring 
                  question={question} 
                  answer={answer} 
                  setQuestionAnswer={setQuestionAnswer}
                  correct={() => correctAnswer(goodAnswer, setGoodAnswer, currentQuestion, setCurrentQuestion, bet)}
                  incorrect={() => badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper)}
                />
    },
    {
      id: 5,
      type: "radio",
      component: <CardRadio
                  question={question} 
                  choice={choices}
                  answer={answer}
                  setQuestionAnswer={setQuestionAnswer}
                  correct={() => correctAnswer(goodAnswer, setGoodAnswer, currentQuestion, setCurrentQuestion, bet)}
                  incorrect={() => badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper)}
                />
    }
  ];
  
  const checkTypeCard = typeCards.filter(elem => elem.type === type);
  
  return (
    <div className="container-cardQuestion" style={{border: checkColor(typeQuestions, data)}}>
      {/* Informations sur la questions + bet sur la question */}
      <section>
        <h1>{`Joueur ${players[currentPlayer].name}. C'est à toi de jouer !`}</h1>
        <h2>{`- Catégorie ${data.main_theme.toUpperCase()}`}</h2>
        <h2>{`- TTmc sur : ${data.theme}`}</h2>
        <h2>{`- Question ${number} / ${bet}`}</h2>
        <div id="betQuestion" className={displayElem(displayQuestions, "hide", "")} onClick={() => setDisplay(!display)}>
          <p>Combien tu paris</p>
          {
            players[currentPlayer].score / 2 === 23 ? (
              <div className={displayElem(display, "betValue", "hide")} onClick={() => {
                setBetQuestion(parseInt(1));
                setDisplayQuestions(true);
              }}>
                1
              </div>
            ) : (
              howQuestionsCanAnswer.map(elem => (
                <div 
                  key={elem}
                  className={displayElem(display, "betValue", "hide")}
                  onClick={() => {
                    setBetQuestion(parseInt(elem));
                    setDisplayQuestions(true);
                  }}
                >
                  {elem}
                </div>
              ))
            )
          }
        </div>
      </section>
      <p>-------------------------------</p>
      
      {/* Affiche le composant en question */}
      {displayQuestions ? checkTypeCard[0].component : ""}

      {/* Tools */}
      <button onClick={() => {
        currentQuestion < bet - 1 ? setCurrentQuestion(currentQuestion + 1) : ""; 
        setGoodAnswer(goodAnswer + 1);
      }}>
        change de page
      </button>
      <button onClick={() => {
        console.log(data.questions);
      }}>
        consoleLog
      </button>
    </div>
  );
};

export default CardQuestion;