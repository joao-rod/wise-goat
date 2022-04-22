import React, { useContext } from "react"

import * as S from "./style"
import { Title } from "../../components/Title"
import AdviceProvider from "../../contexts/advice"

export const Advice: React.FC = () => {
  const {text} = useContext(AdviceProvider)

  return (
    <>
      <S.Header>
        <Title />
      </S.Header>

      <S.Container>
        <div>
          <span>
            <S.Text>{text}</S.Text>
            <h6> - Goat </h6> 
          </span>
          <S.Image src="https://source.unsplash.com/random/320x400" alt="Imagem de decoração" />
        </div>
        
      </S.Container>
    </>
  )
}