import React, { useState } from "react";

// Pictures
import tropheeImg from "../../assets/trophee.png";
import trashImg from "../../assets/poubelle.png";
import socleImg from "../../assets/soclePodium.png";
import projecteurImg from "../../assets/projecteur.png";
import projecteurMirroirImg from "../../assets/projecteur-mirroir.png";
import Button from "../button/Button";

const FinalPage = ({ players, setPlayers, setCurrentComponent }) => {
  const sortPlayers = players.sort((a, b) => b.score - a.score);
  let avatarExist = false;
  let avatarExist2 = false;

  if (sortPlayers.length > 3) {
    avatarExist = true;
    avatarExist2 = true;
  } else if (sortPlayers.length > 2) {
    avatarExist2 = true;
  }

  console.log(players);

  return (
    <div className="wrapEndPage">
      <img className="trophee1" src={tropheeImg} alt="trophée" />
      <h2>Podium</h2>
      <img className="trophee2" src={tropheeImg} alt="trophée" />
      <div>
        <div className="rayon"></div>
        <img className="projo" src={projecteurImg} alt="projecteur" />
      </div>
      <div>
        <div className="rayon2"></div>
        <img className="projo2" src={projecteurMirroirImg} alt="projecteur" />
      </div>

      <div className="wrapperColumns">
        <div className="column2">
          {" "}
          <h4>2ème</h4>
          <div>
            <img className="player2" src={sortPlayers[1].color} alt="blarch" />
          </div>
        </div>
        <div className="column1">
          {" "}
          <h4>1er</h4>
          <div>
            {" "}
            <img className="player1" src={sortPlayers[0].color} alt="blarch" />
          </div>
        </div>
        <div className="column3">
          {" "}
          <h4>3ème</h4>
          <div>
            <img
              className={avatarExist2 ? "player3" : "rien"}
              src={sortPlayers[2] ? sortPlayers[2].color : " "}
            />
          </div>
        </div>
      </div>
      <img className="socleImg1" src={socleImg} alt="socle podium" />
      <img className="socleImg2" src={socleImg} alt="socle podium" />
      <div className="wrapperTrash">
        <img
          className={avatarExist ? "player4" : "rien"}
          src={sortPlayers[3] ? sortPlayers[3].color : " "}
        />
      </div>
      <img className="trashImg" src={trashImg} alt="poubelle" />
      <div className="wrapperButtons">
        <Button onClick={()=> {
          setCurrentComponent(2)
          setPlayers(oldPlayers => {
            const newPlayers = oldPlayers.map(player => ({
              ...player,
              x: player.xStart,
              y: player.yStart,
              score: 0
            }));
            return newPlayers;
          })
        }} 
          value="rejouer"
          className="button"
        />
        <Button onClick={()=> {
          setCurrentComponent(0); 
          setPlayers([])
        }} 
          value="quitter"
          className="button"
        />
      </div>
    </div>
  );
};

export default FinalPage;
