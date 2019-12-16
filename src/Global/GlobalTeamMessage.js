import React from "react"
import { useGlobalStore } from "./GlobalStore"

const GlobalTeamMessage = () => {
  const [
    {
      teams: { teams },
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
        I am a global consumer who is only grabbing the teams (
        {teams.join(", ")}) from global store
      </h4>
    </div>
  )
}

export default GlobalTeamMessage
