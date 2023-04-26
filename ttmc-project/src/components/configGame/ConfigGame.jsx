// React
import React, {useState} from 'react';

// Config
import { usersPositions } from '../../config/config';

// Functions
import { addPlayers, deletePlayers } from '../../functions/addPlayers';
import { displayElem } from '../../functions/cardQuestion/conditions';

// Components
import Button from '../button/Button';

// Picture
import blaseman from "../../../src/assets/little-blaseman.png";
import colkrebad from "../../../src/assets/little-colbad.png";
import colkrebad2 from "../../../src/assets/little-colbad2.png";
import smile from "../../../src/assets/little-smile.png";
import smile2 from "../../../src/assets/little-smile2.png";

const ConfigGame = ({ players, setPlayers, setCurrentComponent }) => {
  const [namePlayer, setNamePlayer] = useState("");
  const [availableAvatar, setAvailableAvatar] = useState([blaseman, smile, smile2, colkrebad, colkrebad2]);

  return (
    <div className="container-configGame">
      <p>Inscrit le nombre de joueur dans le champ prévu à cet effet ! </p>

      <section>
        <div>
          <input 
            type="text" 
            value={namePlayer} 
            onChange={(e) => setNamePlayer(e.target.value)}
            onKeyDown={(e) => addPlayers(e, namePlayer, setPlayers, setNamePlayer, usersPositions, players)} 
          />
          <Button  value={"Valide ton pote"} className={"button"} onClick={(e) => addPlayers(e, namePlayer, setPlayers, setNamePlayer, usersPositions, players)} />
        </div>
        <div>
          {
            players.map(player => (
              <section key={`joueur-${player.id}-${player.name}`} className="container-playerName">
                <p>{player.name} <span onClick={(e) => deletePlayers(setPlayers, players, player)}>X</span></p> 
                <div className="availableAvatar" onClick={() => {
                  setPlayers(oldPlayers => {
                    const newPlayers = [...oldPlayers];
                    newPlayers[player.id - 1].displayAvatar = true;
                    return newPlayers
                  });
                  console.log(player.name);
                }}>
                  Choisis ton avatar
                  {
                    availableAvatar.map((avatar, index) => (
                      <div key={avatar + index} className={displayElem(player.displayAvatar, "", "hide")} style={{position: "relative"}}>
                        <img 
                        src={avatar} 
                        alt="emoji" 
                        style={{position: "absolute", top: `${(index* 30) - 20}px`, left:"150px"}}
                        onClick={() => {
                          setPlayers(oldPlayers => {
                            const newPlayers = [...oldPlayers];
                            newPlayers[player.id - 1].color = avatar;
                            return newPlayers;
                          });
                        }}
                        />
                      </div>
                    ))
                  }
                </div>
              </section>
            ))
          }
        </div>
      </section>
      {
        players.length > 1 ? (
          <div>
            <Button value={"Prêt pour le jeu"} onClick={() => setCurrentComponent(2)} className="button" />
          </div>
        ) : ""
      }
    </div>
  );
};

export default ConfigGame;