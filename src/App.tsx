import { useState } from 'react';
import './App.css';
import { useCookies } from 'react-cookie';
import Choice from './Components/ChoiceButtons';
import Box from './Components/Box';
import PlayAgain from './Components/Replay';


function Board() {
  const [nextS, setNextS] = useState(true);
  const [Boxes, setBoxes] = useState(Array(9).fill(null));
  const [cookies, setCookie] = useCookies(['symbol']);
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  function handleClick(i: number) {
    if (cookies.symbol === undefined) {
      console.log("Undefined, taking 🦉 as start.");
      setCookie('symbol', '🦇', { expires: tomorrow });
      alert("SYMBOL NOT SELECTED SO TAKING 🦇 AS DEFAULT !")
      return;
    }
    else {
      if (Boxes[i]) {
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
        <div className="d-flex justify-content-center">
          <PlayAgain/>
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
    </>
  );
}

export default Board;