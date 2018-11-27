import React from 'react'
import H1 from '../../../blocks/title'
import Img from '../../../blocks/image'
import Container from '../../../blocks/container'

export default function Multithreading() {
  return (
    <Container>
      <H1>
        JS jest jednowątkowy
      </H1>
      <Img alt="forever-alone" src="./assets/forever-alone.png" />
    </Container>
  )
}
