import React from "react";
import { useState } from "react";

import Box from "./Box";
import "./Board.css"

const Board = () => {


  const [state, setstate] = useState(Array(9).fill(null))
  const [isXturn, setIsXTurn] = useState(true);


  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }

    }
    // Check for a tie
    if (state.every((square) => square !== null)) {
      return "Tie";
    }
    return false;
  }

  const isWinner = checkWinner();

  // line:41 - Fixed the state for already filled squares
  const handleClick = (index) => {
    if (state[index] !== null || isWinner) {
      return;
    }

    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setstate(copyState);
    setIsXTurn(!isXturn);
  };

  const handleReset = () => {
    setstate(Array(9).fill(null));
    setIsXTurn(true); // Fix : Fixed the bug for resetting the state of X.
  }

  return (
    <>
    <div className="heading">
    <h1>Tic-Tac-Toe</h1>

    </div>
    <div className="board-container">

      {isWinner ? (
        <>{isWinner === "Tie" ? "It's a Tie!" : `${isWinner} Won!!! `} <button onClick={handleReset}>Play Again</button> </>
      ) : (
       
          <div className="grid">
            <Box onClick={() => handleClick(0)} value={state[0]} />
            <Box onClick={() => handleClick(1)} value={state[1]} />
            <Box onClick={() => handleClick(2)} value={state[2]} />
            <Box onClick={() => handleClick(3)} value={state[3]} />
            <Box onClick={() => handleClick(4)} value={state[4]} />
            <Box onClick={() => handleClick(5)} value={state[5]} />
            <Box onClick={() => handleClick(6)} value={state[6]} />
            <Box onClick={() => handleClick(7)} value={state[7]} />
            <Box onClick={() => handleClick(8)} value={state[8]} />
          </div>
      )}

    </div>
  </> 
  )
}

export default Board;