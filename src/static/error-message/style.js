import styled from 'styled-components'

export const ErrorPage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 100vh;
`

export const ErrorMessage = styled.h1`
  flex: 0;

  &::after{
    content: '🛸';
    display: block;
    font-size: 5em;
    text-align: center;
  }
`
