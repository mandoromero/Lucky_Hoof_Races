import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar"
import GameBoard from "./components/GameBoard/GameBoard";
import FinishLine from "./components/FinishLine/FinishLine";
import StartLine from "./components/StartLine/StartLine";
import Position from "./components/Position/Position";
import Scratched from "./components/Scratched/Scratched";
import "../src/App.css";

function App() {
  const gameName = useSelector((state) => state.app.gameName);

  return (
    <>
      <Navbar />
      
      <div id="game">
        <FinishLine />
        <GameBoard />
        <StartLine />
        <Position />
        <Scratched />
      </div>
    </>
  )
}
  

export default App;
