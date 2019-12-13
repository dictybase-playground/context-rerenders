import React from "react"
import { useGlobalStore } from "./GlobalStore"

const GlobalCount = () => {
  const [
    {
      count: { count },
    },
    dispatch,
  ] = useGlobalStore()

  const handlePlusClick = () => {
    dispatch({
      type: "INCREMENT",
      payload: count,
    })
  }

  const handleMinusClick = () => {
    dispatch({
      type: "DECREMENT",
      payload: count,
    })
  }

  return (
    <div>
      <h3>Counter</h3>
      <button onClick={handleMinusClick}>-</button>
      {count}
      <button onClick={handlePlusClick}>+</button>
    </div>
  )
}

export default GlobalCount
