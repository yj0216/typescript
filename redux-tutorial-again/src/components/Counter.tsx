import { MouseEvent } from "react";

const Counter = ({number,onIncrease,onDecrease} : {number:number,onIncrease:(event: MouseEvent<HTMLButtonElement>) => void,onDecrease:(event: MouseEvent<HTMLButtonElement>) => void}) => {
  return (
    <div>
        <h1>{number}</h1>
        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    </div>
  )
}

export default Counter;