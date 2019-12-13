import React, { createContext, useContext, useReducer } from "react"

const TeamContext = createContext()

const initialState = {
  teams: ["Lions", "Ravens", "Dolphins", "49ers"],
}

const TeamReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEAM":
      return {
        teams: state.teams.concat(action.payload),
      }
    case "REMOVE_TEAM":
      return {
        teams: state.teams.filter(item => item !== action.payload),
      }
    default:
      return state
  }
}

const TeamProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TeamReducer, initialState)

  return (
    <TeamContext.Provider value={[state, dispatch]}>
      {children}
    </TeamContext.Provider>
  )
}

const useTeamStore = () => {
  const context = useContext(TeamContext)
  if (!context) {
    throw new Error("useTeamStore must be used within a TeamProvider")
  }
  return context
}

export { TeamContext, TeamReducer, TeamProvider, useTeamStore }
