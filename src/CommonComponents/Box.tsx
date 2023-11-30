import { MouseEventHandler } from "react";
export default function Box({ value, onBoxClick }: { value: string, onBoxClick: MouseEventHandler }) {
    return (
      <button className="square" onClick={onBoxClick}>
        {value}
      </button>
    );
  }