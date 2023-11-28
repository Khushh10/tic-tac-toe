import React, { MouseEventHandler, useState } from 'react';
import './App.css';

function Box({ value, onBoxClick }: { value: string, onBoxClick: MouseEventHandler }) {
  return (
    <button className="square" onClick={onBoxClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [Boxes, setBoxes] = useState(Array(9).fill(null));

  function handleClick(i: number) {
    const nextBoxes = Boxes.slice();
    nextBoxes[i] = 'O';
    setBoxes(nextBoxes);
  }

  return (
    <>
      <div className="row text-center">
        <div className="board-row col-md-12">
          <Box value={Boxes[0]} onBoxClick={() => handleClick(0)} />
          <Box value={Boxes[1]} onBoxClick={() => handleClick(1)} />
          <Box value={Boxes[2]} onBoxClick={() => handleClick(2)} />
        </div>
        <div className="board-row col-md-12">
          <Box value={Boxes[3]} onBoxClick={() => handleClick(3)} />
          <Box value={Boxes[4]} onBoxClick={() => handleClick(4)} />
          <Box value={Boxes[5]} onBoxClick={() => handleClick(5)} />
        </div>
        <div className="board-row col-md-12">
          <Box value={Boxes[6]} onBoxClick={() => handleClick(6)} />
          <Box value={Boxes[7]} onBoxClick={() => handleClick(7)} />
          <Box value={Boxes[8]} onBoxClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
