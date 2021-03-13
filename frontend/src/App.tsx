import React from "react"
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import { createClient, Provider as UrqlProvider } from "urql"

const urqlClient = createClient({
  url: "/graphql",
})

function App() {
  return (
    <UrqlProvider value={urqlClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UrqlProvider>
  )
}

export default App
