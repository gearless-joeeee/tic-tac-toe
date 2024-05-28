import { useState } from 'react'

function getNextFill(squares){
    const filledSquares = squares.filter(square => (square === 'X' || square === 'O'))
    const fillNumber = filledSquares.length
    const nextFill = fillNumber % 2 === 0 ? 'X' : 'O'
    return nextFill
}

function calculateBoardState(squares){
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
        return `${squares[a]} won`
      }
    }


  const squaresIsFull = squares.filter(square => (square === 'O' || square === 'X')).length === 9

    if(squaresIsFull){
      return 'Nobody won'
    } else {
      const nextFill = getNextFill(squares)
      return `Next player is: ${nextFill}`
    }
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const boardStatus = calculateBoardState(squares)

  const clickHandler = (index) => {
    const curentSquare = squares[index]
    if(!(curentSquare === null) || boardStatus.includes('won')) return 
    const nextFill = getNextFill(squares)
    const newSquares = Array.prototype.slice.call(squares)
    newSquares[index] = nextFill
    setSquares(newSquares)
  }
  return (
    <>
      <div>{boardStatus}</div>
      <div className="board-row">
        <Square value={squares[0]} index={0} handleClick={clickHandler}/>
        <Square value={squares[1]} index={1} handleClick={clickHandler}/>
        <Square value={squares[2]} index={2} handleClick={clickHandler}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} index={3} handleClick={clickHandler}/>
        <Square value={squares[4]} index={4} handleClick={clickHandler}/>
        <Square value={squares[5]} index={5} handleClick={clickHandler}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} index={6} handleClick={clickHandler}/>
        <Square value={squares[7]} index={7} handleClick={clickHandler}/>
        <Square value={squares[8]} index={8} handleClick={clickHandler}/>
      </div>
    </>
  )
}

function Square({ value, index, handleClick }) {
  return <div className="square" onClick={() => handleClick(index)}>{value}</div>
}
