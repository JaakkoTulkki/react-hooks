import React, {useState} from "react"

export function granularCounter() {
  const [count, setCount] = useState(0);
  const Dec = () => <button onClick={() => setCount(count - 1)}>-</button>;
  const Inc = () => <button onClick={() => setCount(count + 1)}>+</button>;
  const Reset = () => <button onClick={() => setCount(0)}>Reset</button>;
  return [count, {Dec, Inc, Reset}]
}