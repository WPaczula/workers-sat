import React from 'react'
import styled from 'styled-components'
import ReactCursorPosition from 'react-cursor-position'
import H1 from '../../../blocks/title'
import Img from '../../../blocks/image'
import Container from '../../../blocks/container'
import Link from '../../../blocks/link'
import Button from '../../../blocks/button'


const Pointer = styled.div.attrs({
  style: ({ position }) => ({
    top: position.y,
    left: position.x,
  }),
})`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2em;
`


const MousePositionProvider = styled(ReactCursorPosition)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

const ServiceWorker = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 10em;
  width: 10em;
  transform: translate(-50%, -50%);
`

const Cache = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 4em;
  width: 4em;
  transform: translate(50%, 50%);
`

const Relative = styled.div`
  position: relative;
`

const ShowUpButton = styled(Button)`
  display: block;
  margin: 1em auto;
`

export default class WhatIsIt extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      serviceWorkerVisible: false,
    }
  }


  componentWillMount() {
    if (typeof document !== 'undefined') document.onkeyup = this.exit
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') document.onkeyup = null
  }

  showServiceWorker = () => {
    const { serviceWorkerVisible } = this.state

    this.setState({ serviceWorkerVisible: !serviceWorkerVisible })
  }

  toggleSimulation = () => {
    const { isSimulationOn } = this.state

    this.setState({ isSimulationOn: !isSimulationOn })
  }

  exit = (e) => {
    if (e.key === 'Escape') {
      this.setState({ isSimulationOn: false })
    } else if (e.key === 'Control') {
      this.toggleSimmulationPause()
    } else if (e.key === 'Alt') {
      this.toggleSimulation()
    }
  }

  toggleSimmulationPause = () => {
    const { pause } = this.state

    this.setState({ pause: !pause })
  }

  render() {
    const { serviceWorkerVisible, pause, isSimulationOn } = this.state

    return (
      <Container>
        <H1>Pośrednik w transporcie</H1>
        <Relative>
          <Img src="./assets/galaxy-watching.png" />
          {
            serviceWorkerVisible
            && <>
              <ServiceWorker src="./assets/satelite.png" />
              <Cache src="./assets/cache.png" />
            </>
          }
        </Relative>
        <Link href="https://caniuse.com/#feat=serviceworkers">HTTPS⭐</Link>
        <ShowUpButton onClick={this.showServiceWorker}>Show up</ShowUpButton>
        {
        isSimulationOn && (
          <MousePositionProvider isEnabled={!pause}>
            <Follower />
          </MousePositionProvider>
        )
        }
      </Container>
    )
  }
}

const Follower = ({ position }) => (
  <Pointer position={position}>
    🌟
  </Pointer>
)
