import React, {useReducer} from "react"

function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1
    case 'reset':
      return 0;
    default:
      throw new Error('wrong action! :(')
  }
}

export function ReducerBased() {
  const [count, dispatch] = useReducer(reducer, 0);
  return <>
    <button onClick={() => dispatch({type: 'dec'})}>-</button>
    {count}
    <button onClick={() => dispatch({type: 'inc'})}>+</button>
    <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
  </>
}