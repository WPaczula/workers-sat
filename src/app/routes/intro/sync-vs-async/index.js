import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from '../../../blocks/button'
import { fireSync, fireAsync } from './functions'
import Container from '../../../blocks/container'

const SideFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SuperButton = styled(Button)`
  padding: 5em;
  font-size: 1em;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const HoverSpinner = styled.div`
  &:hover {
    animation: ${rotate} 2s linear infinite;  
  }
  
  display: inline-block;
  cursor: pointer;
  font-size: 15em;
  line-height: 1.2em;
  padding-bottom: 0.2em;
`

export default function SyncVsAsync() {
  return (
    <Container>
      <SideFlex>
        <div>
          <HoverSpinner>
          ⭐
          </HoverSpinner>
        </div>
        <ColumnFlex>
          <SuperButton onClick={fireSync}>ODPAL SYNCHRONICZNIE</SuperButton>
          <SuperButton onClick={fireAsync}>ODPAL ASYNCHRONICZNIE</SuperButton>
        </ColumnFlex>
      </SideFlex>
    </Container>
  )
}
