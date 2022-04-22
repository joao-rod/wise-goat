import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  padding-top: 2rem;
  padding-left: 3rem;
`

export const Container = styled.main`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    background-color: #e3e3e3;
    height: 25rem;
    width: 50rem;
    border-radius: 0 1rem 1rem 0;
    
    span {
      width: 100%;
      h6 {
        margin-bottom: 0px;
        padding-left: 20rem;
        font-size: 30px;

        color: #1c232e;
        font-weight: 500;
        font-family: Roboto, sans-serif;
      }
    }
  }
`

export const Text = styled.h1`
  color: #72005F;
  font-weight: 400;
  font-family: Roboto, sans-serif;

  padding-left: 1.3rem;
  padding-right: 1.5rem;
`

export const Image = styled.img`
  height: 100%;
  width: 20rem;

  border-radius: 1rem;
`