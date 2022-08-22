import React, { useState } from "react";
import Sqaure from "./Sqaure";

export default function App() {
  const [data, setData] = useState(Array(9).fill(null));
  const [isPlayerX, setIsPlayerX] = useState(true);
  const [winner, setWinner] = useState(false);
  const [winPlayer, setWinPlayer] = useState("");

  const winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (id) => {
    if (!winner) {
      let copyData = [...data]; //making a copy of our state data
      if (!copyData[id]) {
        copyData[id] = isPlayerX ? "X" : "O";
        setData(copyData);
        setIsPlayerX(!isPlayerX);
        winCases.forEach(([a, b, c]) => {
          if (
            copyData[a] === "X" &&
            copyData[b] === "X" &&
            copyData[c] === "X"
          ) {
            setWinner(true);
            setWinPlayer("X");
          } else if (
            copyData[a] === "O" &&
            copyData[b] === "O" &&
            copyData[c] === "O"
          ) {
            setWinner(true);
            setWinPlayer("O");
          }
        });
      }
    }
  };


  const resetGame=()=>{
      setData(Array(9).fill(null))
      setWinner(false)
      setWinPlayer("")
  }

  return (
    <div>
      <h1>{winner?`Player ${winPlayer} won`:isPlayerX ? "Player X turn" : "Player O turn"}</h1>
      <div style={{ width: "320px", display: "flex", flexWrap: "wrap" }}>
        {data.map((item, index) => {
          return <Sqaure value={item} id={index} handleClick={handleClick} />;
        })}
      </div>
      <button onClick={resetGame}>reset</button>
    </div>
  );
}
