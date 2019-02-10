import styled from 'styled-components'
import { secondaryColor, secondaryColorDark } from '../../../style/colors'
import { hover } from '../../../style/pseudo'

export const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

export const Label = styled.label`
  background: ${secondaryColor};
  color: white;
  border: 2px solid ${secondaryColorDark};
  border-radius: 5em;
  font-weight: 800;
  padding: 1em 2em;
  margin: 1em;
  line-height: 0em;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 14em;
  
  ${hover`
    background: ${secondaryColorDark};
  `}

  #input:focus + & {
    outline: 2px solid white;
  }
`

export const Canvas = styled.canvas`
  margin: 1em auto;
  display: block;
  max-height: 36em;
  max-width: 36em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
