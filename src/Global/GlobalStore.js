import React, { createContext, useContext, useReducer } from "react"
import { CountReducer } from "../Count/CountStore"
import { TeamReducer } from "../Team/TeamStore"

const GlobalContext = createContext()

const initialCountState = {
  count: 0,
}

const initialTeamState = {
  teams: ["Lions", "Ravens", "Dolphins", "49ers"],
}

const useCombinedReducers = combinedReducers => {
  // Global State
  const state = Object.keys(combinedReducers).reduce(
    (acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }),
    {},
  )
  // Global Dispatch Function
  const dispatch = action =>
    Object.keys(combinedReducers)
      .map(key => combinedReducers[key][1])
      .forEach(fn => fn(action))
  return [state, dispatch]
}

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({
    count: useReducer(CountReducer, initialCountState),
    teams: useReducer(TeamReducer, initialTeamState),
  })

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalStore = () => useContext(GlobalContext)

export { GlobalContext, GlobalProvider, useGlobalStore }
