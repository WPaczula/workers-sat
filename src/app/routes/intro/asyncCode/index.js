import React from 'react'
import H1 from '../../../blocks/title'
import Img from '../../../blocks/image'
import Container from '../../../blocks/container'

export default function Async() {
  return (
    <Container>
      <H1>
        Asynchroniczność na ratunek 👊
      </H1>
      <Img src="./assets/callback-queue.png" alt="async" />
    </Container>
  )
}
