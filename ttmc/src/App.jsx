// React
import { useEffect, useState } from "react"

//Functions
import { dataFetch } from "./functions/getData";

// Components
import Instructions from "./components/instructions/Instructions";
import ConfigGame from "./components/configGame/ConfigGame";
import GameBoard from "./components/gameBoard/GameBoard";
import Button from "./components/myComponent/Button";

function App() {
  // Récupère les questions du server avec la fonction getData() (../functions/getData.js);
  const [questions, setQuestions] = useState([]);

  // Navigue entre les éléments du tableau "componentsGame"
  // 0 ==> les instructions et les règles;
  // 1 ==> enregistrement des joueurs (config game);
  // 2 ==> affiche le jeu et c'est partit pour ttmc !;
  const [currentComponent, setCurrentComponent] = useState(0);

  // Enregistre les joueurs sous forme de tableau d'objet
  // La structure ressemble à ceci ==>
  // [{id: id, name: name, score: 0, color: color, x: x, y: y}];
  // En fonction du joueur x et y auront des valeurs différents (logique);
  const [players, setPlayers] = useState([]);

  // Contient les composants
  const componentsGame = [
    <Instructions />,
    <ConfigGame />,
    <GameBoard />
  ]

  // Récupère les questions sur le server et les enregistre dans questions
  // useEffect(() => {dataFetch(setQuestions)}, []);

  return (
    <div className="App">
      <h1>Tu te met combien, alias ttmc jet 1.3 !</h1>

      {componentsGame[currentComponent]}
    </div>
  )
}

export default App
