import React, { useContext } from "react"
import { Link } from "react-router-dom"

import * as S from "./style"
import { Title } from "../../components/Title"
import ImageMain from "../../assets/images/img_main.png"


export const Home: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.DivText>
          <Title /> 
          <S.Button to="advice">Pedir conselho</S.Button>
        </S.DivText>

        <S.DivImage>
          <S.Image src={ImageMain} alt="Imagem Central" />
        </S.DivImage>
      </S.Container>
    </>
  )
}
