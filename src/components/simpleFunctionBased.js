import React, {useState} from "react"

export function SimpleFunctionBased() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}
