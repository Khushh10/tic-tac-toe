import { MouseEventHandler } from "react";
export default function Choice({ bvalue, choiceHandler }: { bvalue: string, choiceHandler: MouseEventHandler }) {
  return (

    <div className='d-flex'>
      <div className='my-2 optionn'>
        <button className='mx-2 button-1' onClick={choiceHandler}>{bvalue}</button>
      </div>
    </div>


  );
}
