import React from "react"
import { useCountStore } from "./CountStore"

const Count = () => {
  const [{ count }, dispatch] = useCountStore()

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

export default Count
