import React, { createContext, useContext, useReducer } from "react"

const CountContext = createContext()

const initialState = {
  count: 0,
}

const CountReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      }
    case "DECREMENT":
      return {
        count: state.count - 1,
      }
    default:
      return state
  }
}

const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountReducer, initialState)

  return (
    <CountContext.Provider value={[state, dispatch]}>
      {children}
    </CountContext.Provider>
  )
}

const useCountStore = () => {
  const context = useContext(CountContext)
  if (!context) {
    throw new Error("useCountStore must be used within a CountProvider")
  }
  return context
}

export { CountContext, CountReducer, CountProvider, useCountStore }
