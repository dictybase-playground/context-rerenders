import React from "react"
import { useTeamStore } from "./TeamStore"

const Message = () => {
  const [{ teams }] = useTeamStore()
  // the text will render to a random color for
  // each instance of the Message component
  const getColor = () => Math.floor(Math.random() * 255)
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  }
  return (
    <div>
      <h4 style={style}>
        team context consumer only -- first team is {teams[0]}
      </h4>
    </div>
  )
}

export default Message
