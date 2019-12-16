import React from "react"
import { useGlobalStore } from "./GlobalStore"

const GlobalCountMessage = () => {
  const [
    {
      count: { count },
    },
  ] = useGlobalStore()

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

export default GlobalCountMessage
