// React
import React, { useEffect, useState } from "react";

// Config
import { usersPositions } from "../../config/config";

// Functions
import { addPlayers, deletePlayers } from "../../functions/addPlayers";
import { displayElem } from "../../functions/cardQuestion/conditions";

// Components
import Button from "../button/Button";

// Picture
import blaseman from "../../../src/assets/little-blaseman.png";
import colkrebad from "../../../src/assets/little-colbad.png";
import colkrebad2 from "../../../src/assets/little-colbad2.png";
import smile from "../../../src/assets/little-smile.png";
import smile2 from "../../../src/assets/little-smile2.png";

const ConfigGame = ({ players, setPlayers, setCurrentComponent }) => {
  const [namePlayer, setNamePlayer] = useState("");
  const [availableAvatar, setAvailableAvatar] = useState([
    blaseman,
    smile,
    smile2,
    colkrebad,
    colkrebad2,
  ]);

  const [showLists, setShowLists] = useState(
    Array(availableAvatar.length).fill(false)
  );
  const [disabled, setDisabled] = useState(
    Array(availableAvatar.length).fill(false)
  );

  const toggleDropDown = (index) => {
    setShowLists((oldLists) => {
      const newLists = [...oldLists];
      newLists[index] = !newLists[index];
      return newLists;
    });
  };

  return (
    <div className="container-configGame">
      <p>Inscris le nom de chaque joueur dans le champ prévu à cet effet ! </p>

      <section>
        <div>
          <input
            type="text"
            value={namePlayer}
            onChange={(e) => setNamePlayer(e.target.value)}
            onKeyDown={(e) =>
              addPlayers(
                e,
                namePlayer,
                setPlayers,
                setNamePlayer,
                usersPositions,
                players
              )
            }
          />
          <Button
            value={"OK"}
            className={"button"}
            onClick={(e) =>
              addPlayers(
                e,
                namePlayer,
                setPlayers,
                setNamePlayer,
                usersPositions,
                players
              )
            }
          />
        </div>
        <div>
          {players.map((player, index) => (
            <section
              key={`joueur-${player.id}-${player.name}`}
              className="container-playerName"
            >
              <p>
                {player.name}{" "}
                <span
                  onClick={(e) => deletePlayers(setPlayers, players, player)}
                >
                  X
                </span>
              </p>
              <div
                className="availableAvatar"
                onClick={() => {
                  setPlayers((oldPlayers) => {
                    const newPlayers = [...oldPlayers];
                    newPlayers[player.id - 1].displayAvatar = true;
                    return newPlayers;
                  });
                }}
              >
                {/* Code Célestine Veasna  */}
                    <div style={{fontSize:"100%"}}><p>😎</p></div>
                    <div style={{marginTop:"25px", display:"flex"}}>
                      <button
                        onClick={() => toggleDropDown(index)}
                        className={
                          showLists[index] ? "rotatedArrow" : "defaultArrow"
                        }
                      >^
                      </button>
                    {showLists[index] && (
                      <ul
                        className="dropDownElements avatarDropDown"
                      >
                        {availableAvatar.map((avatar, index) => {
                          return (
                            <li
                              key={`Objet-${index}`}
                              style={{ listStyle: "none" }}
                            >
                              <img
                                key={avatar.index}
                                src={avatar}
                                alt="emoji"
                                style={{
                                  position: "absolute",
                                  top: `${index * 34}px`,
                                  left: "10px",
                                  height: "30px",
                                  width: "30px",
                                }}
                                disabled={disabled[index]}
                                className={disabled[index] ? "disabled" : ""}
                                onClick={() => {
                                  setDisabled(
                                    disabled.map((disabled, i) => i === index)
                                  );
                                  setPlayers((oldPlayers) => {
                                    const newPlayers = [...oldPlayers];
                                    newPlayers[player.id - 1].color = avatar;
                                    return newPlayers;
                                  });
                                  console.log(disabled);
                                }}
                              />
                            </li>
                          );
                        })}
                      </ul>               
                    )}
                  </div>
                {/* Fin du code Veasna Célestine */}
                
                {/* Kriss Code */}
                {/* {availableAvatar.map((avatar, index) => (
                  <div
                    key={avatar + index}
                    className={displayElem(player.displayAvatar, "", "hide")}
                    style={{ position: "relative" }}
                  >
                    <img
                      src={avatar}
                      alt="emoji"
                      style={{
                        position: "absolute",
                        top: `${index * 30 - 20}px`,
                        left: "150px",
                      }}
                      onClick={() => {
                        setPlayers((oldPlayers) => {
                          const newPlayers = [...oldPlayers];
                          newPlayers[player.id - 1].color = avatar;
                          return newPlayers;
                        });
                      }}
                    />
                  </div>
                ))} */}
                {/* Fin Kriss code */}
              </div>
            </section>
          ))}
        </div>
      </section>
      {players.length > 1 ? (
        <div>
          <Button
            value={"Start"}
            onClick={() => setCurrentComponent(2)}
            className="button"
          />
        </div>
      ) : (
        ""
      )}
      {/* <button onClick={() => console.log("players ==>", players)}>logPlayers</button> */}
    </div>
  );
};

export default ConfigGame;
