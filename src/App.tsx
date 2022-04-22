import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Routs } from "./routes"
import { AdviceProvider } from "./contexts/advice"

const App: React.FC = () => (
  <>
    <AdviceProvider>
      <BrowserRouter>
        <Routs />
      </BrowserRouter>
    </AdviceProvider>
  </>
)

export default App
