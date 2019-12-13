import React from "react"
import Team from "./Team/Team"
import GlobalTeam from "./Global/GlobalTeam"
import Count from "./Count/Count"
import GlobalCount from "./Global/GlobalCount"
import TeamMessage from "./Team/TeamMessage"
import CountMessage from "./Count/CountMessage"
import GlobalCountMessage from "./Global/GlobalCountMessage"
import GlobalTeamMessage from "./Global/GlobalTeamMessage"
import { TeamProvider } from "./Team/TeamStore"
import { CountProvider } from "./Count/CountStore"
import { GlobalProvider } from "./Global/GlobalStore"

const App = () => (
  <GlobalProvider>
    <div style={{ display: "flex", textAlign: "center" }}>
      <div style={{ borderStyle: "solid", flexGrow: 1 }}>
        <h1>Global Context</h1>
        <GlobalTeam />
        <GlobalCount />
        <GlobalCountMessage />
        <GlobalTeamMessage />
      </div>
    </div>
    <div style={{ display: "flex", textAlign: "center" }}>
      <div style={{ borderStyle: "solid", flexGrow: 1 }}>
        <TeamProvider>
          <h1>Team Context</h1>
          <Team />
          <TeamMessage />
          <TeamMessage />
          <TeamMessage />
        </TeamProvider>
      </div>
      <div style={{ borderStyle: "solid", flexGrow: 1 }}>
        <CountProvider>
          <h1>Count Context</h1>
          <Count />
          <CountMessage />
          <CountMessage />
          <CountMessage />
        </CountProvider>
      </div>
    </div>
  </GlobalProvider>
)

export default App
