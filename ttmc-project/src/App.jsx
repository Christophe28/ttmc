//React
import { useEffect, useState } from "react"

//Functions
import { dataFetch } from "./functions/getData";

//Components
import Instructions from "./components/instruction/Instructions";
import ConfigGame from "./components/configGame/ConfigGame";
import Canvas from "./components/canvas/Canvas";
import FinalPage from "./components/finalPage/FinalPage";

function App() {
  const [data, setData] = useState([]);
  const [currentComponent, setCurrentComponent] = useState(0);
  const [players, setPlayers] = useState([]);

  const componentsGames = [
    //First step display instructions and rules
    <Instructions
      setState={setCurrentComponent} 
    />,
    //Second step choice player and name
    <ConfigGame
      players={players}
      setPlayers={setPlayers}
      setCurrentComponent={setCurrentComponent}
    />,
    //Playe game
    <Canvas 
      players={players}
      setPlayers={setPlayers}
      data={data}
      setCurrentComponent={setCurrentComponent}
    />,
    <FinalPage />
  ];

  //Load questions
  useEffect(() => {dataFetch(setData)}, [])

  return (
    <div className="App">
      {componentsGames[currentComponent]}
    </div>
  )
}

export default App