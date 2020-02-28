import React, { useState } from 'react'
import Square from './Square'
import { WinningLogic } from './Helper'

import './styles.css'

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  const winningInfo = WinningLogic(squares)
  const winner = winningInfo.winner

  const winnerHighlight = winningInfo.line

  let status;

  if (winner) {
    status = `Yay! Winner is ${winner}`
  } else if(winningInfo.isDraw) {
    status = `Wow... it's a draw!!`
  } else {
    status = `Next player is ${isXNext ? "X" : "O"}`
  }
  
  function renderSquare(i) {
    return (
      <Square onClick={() => {
        const nextSquare = squares.slice()
        nextSquare[i] = isXNext ? "X" : "O"
        setIsXNext(!isXNext)
        setSquares(nextSquare)
      }} 
      
      value={squares[i]}
      highlightWinner = {winnerHighlight && winnerHighlight.includes(i)}
      />
    )
  }

  return (
    <div>
      <div className="status">{status}</div>

      <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      </div>

      <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      </div>

      <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      </div>

    </div>
  )
}

export default Game
