//React
import { useEffect, useState } from "react"

//Functions
import { dataFetch } from "./functions/getData";

//Components
import {Instructions, ShortInstructions} from "./components/instruction/Instructions";
import ConfigGame from "./components/configGame/ConfigGame";
import Canvas from "./components/canvas/Canvas";
import FinalPage from "./components/finalPage/FinalPage";
import Button from "./components/button/Button"

function App() {
  const [data, setData] = useState([]);
  const [currentComponent, setCurrentComponent] = useState(0);
  const [players, setPlayers] = useState([]);

  const [showRule, setShowRule] = useState(false);

  const toggleRule = () => {
    setShowRule(!showRule);
    console.log(showRule);
  }

  const componentsGames = [
    //First step display instructions and rules
    <ShortInstructions
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
    <FinalPage 
      players={players} 
      setPlayers={setPlayers} 
      setCurrentComponent={setCurrentComponent} 
    />
  ];

  //Load questions
  useEffect(() => {dataFetch(setData)}, [])

  return (
    <div className="App">
      <Button onClick={toggleRule} className="btnRules"/>
      {showRule ? <Instructions /> : ""}
      {componentsGames[currentComponent]}
      {
        currentComponent > 0 && currentComponent < 3 ? <Button onClick={()=>{setCurrentComponent(0); setPlayers([])}} className="btnExit"/> : ""
      }
      {currentComponent != 3 ? <div className="logoTtmc" ></div> : ""}
    </div>
  )
}

export default App