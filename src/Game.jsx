import { useState } from "react";
import Board from "./Board";
import History from "./History";



function calculateWinner(squares){
  const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
    for(const winCondition of winConditions){
      const [a, b, c] = winCondition
      if(
        !(squares[a] === null) 
        && (squares[b] === squares[a])
        && (squares[c] === squares[a])
      ){
        return squares[a]
      }
    }
      return null
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [winner, setWinner] = useState(null)
  if(!winner){
    const winner = calculateWinner(squares) 
    winner && setWinner(winner)
  } 

  const handleSquareChange = (newSquares) => {
    setSquares(newSquares)
    const newHistory = [...history, newSquares ]
    setHistory(newHistory)
  }

  const handleHistoryChange = (index) => {
    const newSquares = history[index]
    setSquares(newSquares)
  }

  return (
    <div className="game">
      <Board squares={squares} winner={winner} onChange={handleSquareChange}/>
      {winner ? <History history={history} onChange={handleHistoryChange}/> : null}
    </div>
  );
}

export default Game;
