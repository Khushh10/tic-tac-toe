import { useState } from 'react';
import './App.css';
import { useCookies } from 'react-cookie';
import Choice from './CommonComponents/ChoiceButtons';
import Box from './CommonComponents/Box';
import PlayAgain from './CommonComponents/Replay';


function Board() {
  const [nextS, setNextS] = useState(true);
  const [Boxes, setBoxes] = useState(Array(9).fill(null));
  const [cookies, setCookie] = useCookies(['symbol']);
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const winS = winner(Boxes);
  let decision;
  if (winS) {
    decision = winS + "WON THE GAME!!!";
  }


  function handleClick(i: number) {
    if (cookies.symbol === undefined) {
      console.log("Undefined, taking 🦉 as start.");
      setCookie('symbol', '🦇', { expires: tomorrow });
      alert("SYMBOL NOT SELECTED SO TAKING 🦇 AS DEFAULT !")
      return;
    }
    else {
      if (Boxes[i] || winner(Boxes)) {
        return;
      }
      const nextBoxes = Boxes.slice();
      if (nextS) {
        nextBoxes[i] = cookies.symbol;
        if (cookies.symbol === "🦉") {
          setCookie('symbol', '🦇', { expires: tomorrow });
        }
        else {
          setCookie('symbol', '🦉', { expires: tomorrow });
        }
      } else {
        nextBoxes[i] = cookies.symbol;
        if (cookies.symbol === "🦇") {
          setCookie('symbol', '🦉', { expires: tomorrow });
        }
        else {
          setCookie('symbol', '🦇', { expires: tomorrow });
        }
      }
      setBoxes(nextBoxes);
      setNextS(!nextS);
    }
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

  function winner(Boxes: Array<number>) {
    const wChances = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // console.clear();
    for (let i = 0; i < wChances.length; i++) {
      const [a, b, c] = wChances[i];
      if (Boxes[a] && Boxes[a] === Boxes[b] && Boxes[a] === Boxes[c]) {
        return Boxes[a];
      }
    }
    return null;
  }
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='board-row '>
          <h1 className='Gfont'>CHOOSE THE STARTING SYMBOL</h1>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center">
          <Choice bvalue={'🦇'} choiceHandler={() => choiceClick(1)} />
          <Choice bvalue={'🦉'} choiceHandler={() => choiceClick(2)} />
        </div>
        <div className="button-box d-flex justify-content-center mt-3">
          <button className="decision">{decision}</button>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className="mt-3 pt-3">
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
      <div className="d-flex justify-content-center mt-3">
        <PlayAgain />
      </div>
    </>
  );
}

export default Board;