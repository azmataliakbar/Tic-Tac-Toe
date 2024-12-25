"use client";

import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (board[index] !== "" || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  };

  const checkWinner = (newBoard: string[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
        return;
      }
    }

    if (!newBoard.includes("")) {
      setWinner("Tie");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="background-image-1  flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="background-image-2  w-96 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="shadow-1 text-4xl lg:text-5xl font-extrabold text-center text-white mb-4">
          Tic Tac Toe
        </h1>
        <div className="grid grid-cols-3 gap-2">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="h-20 w-20 bg-gradient-to-r from-purple-300 to-pink-300 text-rose-800 text-5xl font-extrabold rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              {cell}
            </button>
          ))}
        </div>
        <div className="mt-4 text-center">
          {winner ? (
            <h2 className="text-2xl font-extrabold text-white">
              {winner === "Tie" ? "It's a Tie!" : `Winner: ${winner}`}
            </h2>
          ) : (
            <h2 className="text-2xl font-extrabold text-white">
              Next Player: {isXNext ? "X" : "O"}
            </h2>
          )}
          <button
            onClick={resetGame}
            className="mt-4 px-4 py-2 bg-pink-500 text-white font-extrabold rounded-lg shadow-md hover:bg-green-500 transition-colors"
          >
            Reset Game
          </button>
        </div>
        <h4 className="text-center text-white font-extrabold mt-2">Author:Azmat Ali</h4>
      </div>
    </div>
  );
};

export default TicTacToe;
