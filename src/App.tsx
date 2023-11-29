import React, { MouseEventHandler, useState } from 'react';
import './App.css';
import Cookies, { useCookies } from 'react-cookie';
function Choice({ bvalue, choiceHandler }: { bvalue: string, choiceHandler: MouseEventHandler }) {
  return (
    <>
      <div className='d-flex'>
        <div className='my-2 optionn'>
          <button className='mx-2 button-1' onClick={choiceHandler}>{bvalue}</button>
        </div>
      </div>
    </>
  );
}
function Box({ value, onBoxClick }: { value: string, onBoxClick: MouseEventHandler }) {
  return (
    <button className="square" onClick={onBoxClick}>
      {value}
    </button>
  );
}

function Board() {
  const [nextS, setNextS] = useState(true);
  const [Boxes, setBoxes] = useState(Array(9).fill(null));
  const [cookies, setCookie] = useCookies(['symbol']);

  function handleClick(i: number) {
    const nextBoxes = Boxes.slice();
    const startS = cookies.get('symbol','/');
    console.log('startS');
    nextBoxes[i] = startS;
    setBoxes(nextBoxes);
    if (nextS) {
      nextBoxes[i] = '🦇';
    } else {
      nextBoxes[i] = '🦉';
    }
    setNextS(!nextS);
  }

  function choiceClick(i: number) {
    if (i === 1) {
      console.log("CROSS");
      setCookie('symbol', '🦇');
    }

    else {
      console.log("ZERO");
      setCookie('symbol', '🦉');
    }
  }

  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='board-row '>
          <h1>Choose the starting Symbol</h1>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center">
          <Choice bvalue={'🦇'} choiceHandler={() => choiceClick(1)} />
          <Choice bvalue={'🦉'} choiceHandler={() => choiceClick(2)} />
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className="my-5 py-5">
          <div className="board-row">
            <Box value={Boxes[0]} onBoxClick={() => handleClick(0)} />
            <Box value={Boxes[1]} onBoxClick={() => handleClick(1)} />
            <Box value={Boxes[2]} onBoxClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
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
      </div>
    </>
  );
}

export default Board;