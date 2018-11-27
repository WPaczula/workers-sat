import styled, { css, keyframes } from 'styled-components'
import React from 'react'
import Button from '../../../blocks/button'


const SateliteImg = styled.img`
  height: 0;
  width: 0;
  top: 12em;
  left: 3em;
  z-index: 5;
  transition: all 2s;
  position: absolute;
  object-fit: contain;

  ${props => props.launched && css`
    top: -11em;
    left: 51em;
    height: 8em;
    width: 10em;
  `}
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const ProcessingImg = styled.img`
  position: absolute;
  top: -9em;
  left: 54em;
  height: 4em;
  width: 4em;
  object-fit: contain;
  z-index: 10;
  animation: ${rotate} 3s linear infinite;

  ${props => !props.isProcessing && css`
    display: none;
  `}
`

export const Processing = props => <ProcessingImg src="./assets/processing.png" {...props} />

export const DemoButton = styled(Button)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  ${props => props.ninja && css`visibility: hidden;`}

  ${props => props.dataRecieved && css`
    background-color: green;
    border-color: darkgreen;
    visibility: visible;
  `}
`

export const Earth = styled.div`
  position: absolute;
  top: 1em;
  left: 0;
  font-size: 8em;
  z-index: 10;

  &::before{
    content: '🌍';
  }
`

export const Data = styled.div`
  position: absolute;
  top: 12em;
  left: 3em;
  z-index: 4;
  transition: all 2s;
  position: absolute;
  font-size: 1em;

  &::before {
    content: '💾';
    font-size: 2em;
  }

  ${props => props.sent && css`
    top: -8em;
    left: 55em;
  `}
`

export const Satelite = props => <SateliteImg src="./assets/satelite.png" {...props} />
