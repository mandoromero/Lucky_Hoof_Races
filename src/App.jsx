import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar"
import GameBoard from "./components/GameBoard/GameBoard";
import FinishLine from "./components/FinishLine/FinishLine";
import StartLine from "./components/StartLine/StartLine";
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
      </div>
    </>
  )
}
  

export default App;
