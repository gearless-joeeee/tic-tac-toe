

export function getNextFill(squares){
    const filledSquares = squares.filter(square => (square === 'X' || square === 'O'))
    const fillNumber = filledSquares.length
    const nextFill = fillNumber % 2 === 0 ? 'X' : 'O'
    return nextFill
}


function getBoardState(winner, squares) {
  if(winner){
    return `Winner is ${winner}`
  } else {
    const filledSquares = squares.filter(square => (square === 'X' || square === 'O'))
    const fillNumber = filledSquares.length
    return fillNumber === 9 ? 'Nobody Won' : 'Next Player is:' + getNextFill(squares)
  }
}


export default function Board({squares,winner, onChange}) {

  
  const clickHandler = (index) => {
    const curentSquare = squares[index]
    if(!(curentSquare === null) || winner) return 
    const nextFill = getNextFill(squares)
    const newSquares = Array.prototype.slice.call(squares)
    newSquares[index] = nextFill
    onChange(newSquares)
  }
  return (
    <div>
      <h4 className="board-state">{getBoardState(winner,squares)}</h4>
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
    </div>
  )
}

function Square({ value, index, handleClick }) {
  return <div className="square" onClick={() => handleClick(index)}>{value}</div>
}


