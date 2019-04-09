import React, {useContext, useEffect, useState} from "react"
import {InitialValueContext} from "../App"

export function ComplexFunctionBased() {
  const initialCount = useContext(InitialValueContext);
  const [count, setCount] = useState(initialCount);
  const [title, setTitle] = useState('');
  useEffect(() => {
    document.title = title;
  }, [title])
  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
    </>
  )
}