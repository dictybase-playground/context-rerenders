import React from "react"
import { useGlobalStore } from "./GlobalStore"

const Message = () => {
  const [
    {
      count: { count },
    },
  ] = useGlobalStore()
  // the text will render to a random color for
  // each instance of the Message component
  const getColor = () => Math.floor(Math.random() * 255)
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  }
  return (
    <div>
      <h4 style={style}>
        I am a global consumer who is only grabbing current count ({count}) from
        global store
      </h4>
    </div>
  )
}

export default Message
