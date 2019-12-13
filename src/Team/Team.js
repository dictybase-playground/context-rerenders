import React, { useState } from "react"
import { useTeamStore } from "./TeamStore"

const Team = () => {
  const [{ teams }, dispatch] = useTeamStore()
  const [team, setTeam] = useState("")

  const handleRemoveClick = item => {
    dispatch({
      type: "REMOVE_TEAM",
      payload: item,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({
      type: "ADD_TEAM",
      payload: team,
    })
    setTeam("")
  }

  const handleChange = event => {
    setTeam(event.target.value)
  }

  return (
    <div>
      <h3>Teams</h3>
      <ul>
        {teams.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => handleRemoveClick(item)}>X</button>
          </li>
        ))}
      </ul>
      <form>
        <input type="text" value={team} onChange={handleChange} />
        <button onClick={handleSubmit}>add</button>
      </form>
    </div>
  )
}

export default Team
