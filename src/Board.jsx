import { useState } from 'react'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const clickHandler = (index) => {

    const filledSquares = squares.filter(square => (square === 'X' || square === 'O'))
    const fillNumber = filledSquares.length
    const nextFill = fillNumber % 2 === 0 ? 'X' : 'O'
    const newSquares = Array.prototype.slice.call(squares)
    newSquares[index] = nextFill
    setSquares(newSquares)
  }
  return (
    <>
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
