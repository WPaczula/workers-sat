import React from 'react'
import ReactCursorPosition from 'react-cursor-position'
import styled from 'styled-components'
import H1 from '../../../blocks/title'
import Img from '../../../blocks/image'
import Container from '../../../blocks/container'
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

export default class Async extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSimulationOn: false,
      pause: false,
    }
  }

  componentWillMount() {
    if (document) document.onkeyup = this.exit
  }

  componentWillUnmount() {
    if (document) document.onkeyup = null
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
    }
  }

  toggleSimmulationPause = () => {
    const { pause } = this.state

    this.setState({ pause: !pause })
  }


  render() {
    const { isSimulationOn, pause } = this.state

    if (document) document.onkeyup = this.exit

    return (
      <Container>
        <H1>
        Asynchroniczność na ratunek 👊
        </H1>
        <Img src="./assets/callback-queue.png" alt="async" />
        <Button onClick={this.toggleSimulation}>Szybkie demko</Button>
        {
          isSimulationOn
          && (
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
    🚀
  </Pointer>
)
