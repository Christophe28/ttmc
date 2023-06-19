// React
import React, { useRef, useEffect, useState } from "react";

// Components
import CardQuestion from "../cardQuestion/CardQuestion";
import ttmcLogo from "/ttmc_online_logo.png";
import Wrapper from "../wrapper/Wrapper";
import PlayerList from "../playerList/PlayerList";

// Functions
import { createGameBoard } from "../../functions/canvas/createGameBoard";
import { moveDraw } from "../../functions/canvas/moveDraw";
import { stopDraw } from "../../functions/canvas/stopDraw";
import {
  allCorrect,
  endMove,
  endBoard,
  leftToRigth,
  topToBot,
  rigthToLeft,
  backTopToBot,
  endGame,
} from "../../functions/canvas/conditions";
import { startAnimation } from "../../functions/canvas/startAnimation";
import { updateScoreBack } from "../../functions/updateScoreBack";
import { restartDisplay } from "../../functions/restartDisplay";
import { nextPlayer } from "../../functions/nextPlayer";

// Configs
import {
  canvasWidth,
  canvasHeight,
  squareSize,
  radius,
  typeQuestions,
  lastQuestion,
} from "../../config/config";

const Canvas = ({ players, setPlayers, data, setCurrentComponent }) => {
  const [ctx, setCtx] = useState(null);
  const [active, setActive] = useState(false);
  const [move, setMove] = useState(0);
  const [comeBack, setComeBack] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [goodAnswer, setGoodAnswer] = useState(0);
  const [betQuestion, setBetQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [dataFilter, setDataFilter] = useState([]);
  const [random, setRandom] = useState(0);
  const [displayQuestions, setDisplayQuestions] = useState(false);
  const [displayWrapper, setDisplayWrapper] = useState(true);

  const canvasRef = useRef(null);
  const { score, x, y, xMax, yMax, yStart, xLast, yLast } =
    players[currentPlayer];


  const temporis = [1, 2, 3, 4 ,5 ,6 , 7, 8, 9, 10];

  // Set en temps réel getContext et canvasRef.current sinon sa bug
  useEffect(() => {
    const canvas = canvasRef.current;
    setCtx(canvas.getContext("2d"));
  }, []);

  // Dessiner le canvas dès que le state ctx récupère une valeur
  useEffect(() => {
    if (!ctx) {
      return;
    }
    createGameBoard(
      canvasRef.current,
      canvasWidth,
      canvasHeight,
      ctx,
      squareSize,
      typeQuestions,
      players,
      radius
    );
  }, [ctx]);

  useEffect(() => {
    if (!ctx) {
      return;
    }
    // Démarre l'animation lorsque le joueur à répondu correctement à toutes les questions
    if (allCorrect(betQuestion, goodAnswer)) {
      setDisplayWrapper(false);
      startAnimation(setActive, setMove);
    }
  }, [goodAnswer]);

  // Permet l'animation lorsqu'on clique sur le bouton
  useEffect(() => {
    if (!ctx) {
      return;
    }
    if (active) {
      // Vérifie si on est à la fin et recule en arrière
      if (endBoard(x, xLast, y, yLast)) {
        //Fin du mouvement
        if (endMove(move, squareSize, goodAnswer)) {
          stopDraw(setActive, setMove, false, setCurrentQuestion);
          restartDisplay(
            setGoodAnswer,
            setBetQuestion,
            setDisplayQuestions,
            setDisplayWrapper
          );
        } else {
          setComeBack(true);
          setActive(false);
        }
      }
      // Arrête de parcourir le plateau
      if (endMove(move, squareSize, goodAnswer)) {
        stopDraw(setActive, setMove, false, setCurrentQuestion);
        setPlayers((oldPlayers) => {
          const newPlayers = [...oldPlayers];
          newPlayers[currentPlayer].score =
            oldPlayers[currentPlayer].score + goodAnswer;
          return newPlayers;
        });
        nextPlayer(currentPlayer, players, setCurrentPlayer);
        restartDisplay(
          setGoodAnswer,
          setBetQuestion,
          setDisplayQuestions,
          setDisplayWrapper
        );
      } else {
        // Déplace tous les pions
        setTimeout(() => {
          // Déplace les pions sur la première row de gauche à droite
          if (leftToRigth(x, xMax, y, yStart)) {
            createGameBoard(
              canvasRef.current,
              canvasWidth,
              canvasHeight,
              ctx,
              squareSize,
              typeQuestions,
              players,
              radius
            );
            moveDraw(setMove, move, setPlayers, currentPlayer, "x", 1);
          }
          // Déplace les pions sur la dernière colonne de haut en bas
          else if (topToBot(x, xMax, y, yMax)) {
            createGameBoard(
              canvasRef.current,
              canvasWidth,
              canvasHeight,
              ctx,
              squareSize,
              typeQuestions,
              players,
              radius
            );
            moveDraw(setMove, move, setPlayers, currentPlayer, "y", 1);
          }
          // Déplace les pions sur la dernière row de droite à gauche
          else if (rigthToLeft(x, xLast, y, yMax)) {
            createGameBoard(
              canvasRef.current,
              canvasWidth,
              canvasHeight,
              ctx,
              squareSize,
              typeQuestions,
              players,
              radius
            );
            moveDraw(setMove, move, setPlayers, currentPlayer, "x", -1);
          }
          // Déplace les pions sur la première colonne de bas en haut
          else {
            createGameBoard(
              canvasRef.current,
              canvasWidth,
              canvasHeight,
              ctx,
              squareSize,
              typeQuestions,
              players,
              radius
            );
            moveDraw(setMove, move, setPlayers, currentPlayer, "y", -1);
          }
        }, 25 / (goodAnswer * 10));
      }
    }

    // Retour arrière
    if (comeBack) {
      // S'arrête
      if (endMove(move, squareSize, goodAnswer)) {
        stopDraw(setComeBack, setMove, false, setCurrentQuestion);
        updateScoreBack(players, currentPlayer, 23, goodAnswer, setPlayers);
        nextPlayer(currentPlayer, players, setCurrentPlayer);
        restartDisplay(
          setGoodAnswer,
          setBetQuestion,
          setDisplayQuestions,
          setDisplayWrapper
        );
      } else {
        setTimeout(() => {
          // Déplace les pions sur la première colonne de haut en bas
          if (backTopToBot(y, yLast, squareSize, 4)) {
            createGameBoard(
              canvasRef.current,
              canvasWidth,
              canvasHeight,
              ctx,
              squareSize,
              typeQuestions,
              players,
              radius
            );
            moveDraw(setMove, move, setPlayers, currentPlayer, "x", 1);
          } else {
            // Fin du jeu
            if (endGame(score, goodAnswer)) {
              setCurrentComponent(3);
              return;
            }
            // Déplace les pions sur la dernière row de gauche à droite
            createGameBoard(
              canvasRef.current,
              canvasWidth,
              canvasHeight,
              ctx,
              squareSize,
              typeQuestions,
              players,
              radius
            );
            moveDraw(setMove, move, setPlayers, currentPlayer, "y", 1);
          }
        }, 25 / (goodAnswer * 10));
      }
    }
  }, [move]);

  // Refresh random et dataFilter en même temps
  useEffect(() => {
    if (score / 2 === 23) {
      setDataFilter(
        data.filter(
          (category) =>
            category.main_theme.toLowerCase() ===
            lastQuestion.type.toLowerCase()
        )
      );
      setRandom(
        Math.floor(
          Math.random() *
            data.filter(
              (category) =>
                category.main_theme.toLowerCase() ===
                lastQuestion.type.toLowerCase()
            ).length
        )
      );
    } else {
      setDataFilter(
        data.filter(
          (category) =>
            category.main_theme.toLowerCase() ===
            typeQuestions[(score / 2) % 4].type.toLowerCase()
        )
      );
      setRandom(
        Math.floor(
          Math.random() *
            data.filter(
              (category) =>
                category.main_theme.toLowerCase() ===
                typeQuestions[(score / 2) % 4].type.toLowerCase()
            ).length
        )
      );
    }
  }, [currentPlayer]);

  return (
    <>
    <PlayerList players={players} currentPlayer={currentPlayer}/>
      <div className="canvasWrapper">
        <canvas ref={canvasRef}></canvas>
        <img src={ttmcLogo} alt="Logo ttmc" className="logoGameBoard" />
      </div>
      <Wrapper displayWrapper={displayWrapper}>
        {dataFilter.length > 0 ? (
          <CardQuestion
            data={dataFilter[random]}
            players={players}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            setGoodAnswer={setGoodAnswer}
            goodAnswer={goodAnswer}
            setBetQuestion={setBetQuestion}
            bet={betQuestion}
            setBet={setBetQuestion}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            displayQuestions={displayQuestions}
            setDisplayQuestions={setDisplayQuestions}
            setDisplayWrapper={setDisplayWrapper}
          />
        ) : (
          "On attend que ça charge"
        )}
      </Wrapper>
      {
        temporis.map(elem => (

          <div className="temporis" style={{
            position:"absolute",
            bottom: "0px",
            left: `${elem * 100}px`,
            width: "10px"
          }}>
            <button
              onClick={() => {
                setGoodAnswer(elem);
                setBetQuestion(elem);
              }}
            >
              {`Avance de ${elem} case`}
            </button>
          </div>
        ))
      }
    </>
  );
};

export default Canvas;
