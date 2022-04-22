import { Link } from 'react-router-dom';
import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const DivText = styled.div`
  padding-top: 15rem;
`

export const Button = styled(Link)`
  padding: 0.7rem 5rem;

  background-color: #72005F;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  text-decoration: none;

  border-radius: 25px;
`

export const DivImage = styled.div`
  padding-top: 5rem;
  padding-left: 10rem;
`

export const Image = styled.img`
  height: 30rem;
`