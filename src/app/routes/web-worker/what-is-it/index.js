import React from 'react'
import H1 from '../../../blocks/title'
import Img from '../../../blocks/image'
import Container from '../../../blocks/container'
import Link from '../../../blocks/link'

export default function WhatIsIt() {
  return (
    <Container>
      <H1>Czym to w ogóle jest?</H1>
      <Img src="./assets/cosmos.png" />
      <Link href="https://caniuse.com/#feat=webworkers">⭐</Link>
    </Container>
  )
}
