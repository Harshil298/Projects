import GamePlay from "./Components/GamePlay";
import StartGame from "./Components/StartGame"
import { useState } from "react";

function App() {
  const [isGameStarted,setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {

    setIsGameStarted( (pre) => !pre );
  }
  return (
    
    <>

      {
        isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay} />
      }

    </>
    
  )
}

export default App


