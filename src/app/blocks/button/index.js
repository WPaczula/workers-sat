import styled from 'styled-components'
import { secondaryColor, secondaryColorDark } from '../../style/colors'
import { hover } from '../../style/pseudo'

const Button = styled.button`
  background: ${secondaryColor};
  color: white;
  border: 2px solid ${secondaryColorDark};
  border-radius: 5em;
  font-weight: 800;
  padding: 1em 2em;
  margin: 1em;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  font-size: 1em;

  ${hover`
    background: ${secondaryColorDark};
  `}
`

export default Button
