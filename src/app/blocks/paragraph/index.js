import styled, { css } from 'styled-components'

const P = styled.p`
  ${props => props.center && css`text-align: center;`}
  font-size: 1.5em;
  margin: 1em 0;
`

export default P
