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
import { nextAssPlayer } from '../../functions/nextPlayer';
import { checkColor } from '../../functions/cardQuestion/checkColor';

const CardQuestion = ({data, players, currentPlayer, setCurrentPlayer, setGoodAnswer, goodAnswer, bet, setBet, setBetQuestion, currentQuestion, setCurrentQuestion, displayQuestions, setDisplayQuestions, setDisplayWrapper}) => {
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const [displayCardResponse, setDisplayCardResponse] = useState(false);
  const [display, setDisplay] = useState(false);

  const { question, answer, choices, type, number } = data.questions[currentQuestion];

  const typeCards = [
    {
      id: 1,
      type: "direct",
      component: <CardDirect
                  question={question} 
                  answer={answer}
                  setQuestionAnswer={setQuestionAnswer}
                  correct={() => correctAnswer(goodAnswer, setGoodAnswer, currentQuestion, setCurrentQuestion, bet)}
                  incorrect={() => badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper, setDisplayCardResponse)}
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
                  incorrect={() => badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper, setDisplayCardResponse)}
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
                  incorrect={() => badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper, setDisplayCardResponse)}
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
                  incorrect={() => badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper, setDisplayCardResponse)}
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
                  incorrect={() => badAnswer(setBet, setGoodAnswer, players, currentPlayer, setCurrentPlayer, setCurrentQuestion, setDisplayQuestions, setDisplayWrapper, setDisplayCardResponse)}
                />
    }
  ];
  
  const checkTypeCard = typeCards.filter(elem => elem.type === type);
  
  return (
    <div className="container-cardQuestion" 
         style={{
          outline:"3px solid black",
          border:checkColor(typeQuestions, data)
    }}
    >
      
      {/* Informations sur la questions + bet sur la question */}
      {
        displayCardResponse ? (
          <div>
          <h5>Perdu!</h5>
          <div className="container-CardResponse">
            <p>La bonne réponse était <a>{answer}</a> </p>
            {/* currentPlayer, players, setCurrentPlayer */}
            <p> <span>{players[nextAssPlayer(currentPlayer, players)].name}</span>, à toi de jouer 😉</p>
          </div>
          </div>
        ) : (
          <>
            <section className='cardInfos'>
              <h1><span className='player'>{players[currentPlayer].name}</span>, c'est à toi de jouer !</h1>
              <h2>Catégorie <span>{data.main_theme.toUpperCase()}</span></h2>
              <h2>TTmc sur <span>{data.theme}</span></h2>
              <h2>{` Question ${number} / ${bet}`}</h2>
              <div 
                id="betQuestion" 
                className={displayElem(displayQuestions, "hide", "")} 
                onClick={() => setDisplay(!display)}>
                   <p>Tu te mets combien ?</p>
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
          </>
        )
      }

    </div>
  );
};

export default CardQuestion;