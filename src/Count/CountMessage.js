import React from "react"
import { useCountStore } from "./CountStore"

const Message = () => {
  const [{ count }] = useCountStore()
  // the text will render to a random color for
  // each instance of the Message component
  const getColor = () => Math.floor(Math.random() * 255)
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  }
  return (
    <div>
      <h4 style={style}>count consumer only -- the count is {count}</h4>
    </div>
  )
}

export default Message
