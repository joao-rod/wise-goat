import React, { createContext, useState } from "react"

import getAdvice from "../services/getAdvice"

interface textObject {
  slip: {
    advice: string
  }
}

const AdviceContext = createContext({text: ""})

export const AdviceProvider: React.FC = ({children}) => {
  const [text, setText] = useState("");

  (async function addText() {
    const response = await getAdvice.get<textObject>('/advice')
    const result = response.data
    setText(result.slip.advice)
  })()

  return (
    <AdviceContext.Provider value={{text: text}}>
      {children}
    </AdviceContext.Provider>
  )
}

export default AdviceContext
