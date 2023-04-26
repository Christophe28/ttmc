import React from 'react';
import bookImg from "../../assets/book.png";
import Button from '../button/Button';

export const Instructions = ({ setState }) => {
  return (
    <>
      <div className='body'>
      <div className='container'>
        <div className='rules'>
        <img src={bookImg} alt="book" />
        <h3>Règles du jeu</h3>
      
        <p>Pour jouer au TTMC il faut remplir les conditions suivantes : </p>
         <p>- 2 à 4 joueurs</p>
         <p>- 14 ans et +</p>
         <p>- Partie entre 42 minutes et 1h37</p> 
      
      <p>Le but du jeu est d'être le premier à parcourir le plateau en répondant aux questions posées.</p> 
      
      <p> Le jeu se déroule dans le sens des aiguilles d'une montre, les joueurs jouent à tour de rôle.</p>
      
      <p>Chaque case contient un thème, les thèmes sont répartis en 4 catégories : </p>
        <p className='font-bold'>- Improbable</p>
        <p className='font-bold'>- Mature</p>
        <p className='font-bold'>- Plaisir</p>
        <p className='font-bold'>- Scolaire</p>
        
      {/* <p> Règle subsidiaire : </p>
      <p>les joueurs doivent se concerter avant de commencer le jeu, si tous les joueurs sont d'accord, il est accordé de vérifier l'orthographe des noms de famille sur Internet, uniquement si le joueur a énoncé le dit nom à haute voix avant la vérification.</p> */}
        </div>
        <div className='wrap'>
        <div className='gameProgress'>
        <h3>Déroulement du jeu</h3>
        <p>Chaque joueur commencera obligatoirement par une carte improbable pour le premier tour.</p>
      
      <p>Les joueurs devront évaluer leurs connaissances sur le sujet de 1 à 10. </p>
      
      <p>Elle sont classées de la façon suivante :</p> 
      
      <p> - 1 à 3 niveau « faible »</p>
      <p> - 4 à 5 niveau « basique »</p>
      <p> - 6 à 8 niveau « plutôt pas mal »</p>
      <p> - 9 à 10 niveau « expert »</p>
      
      <p> Si vous répondez bon à toutes les questions posées, vous avancez du même nombre de cases que du nombre de questions posées. Par exemple, si vous répondez correctement aux 4 premières questions et que vous vous étiez évalué à 4, vous avancez de 4 cases, si vous répondez faux à une question, vous restez sur votre case.</p>
        </div>
        <div className='endGame'>
          <h3>Fin de partie</h3>
          <p>
          Une fois qu'un joueur arrive sur la case The_End, la partie n'est pas terminée. Une dernière question est posée, si le joueur trouve la bonne réponse, c'est gagné. Si ce n'est pas le cas, le joueur reste sur la case et retente sa chance au tour suivant.
          </p>
        </div>
        </div>
      </div>
      </div>
      <Button value={"Enregistrement joueurs"} onClick={() => setState(1)}/>
    </>
  );
};

export default Instructions;