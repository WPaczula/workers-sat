import React from 'react'
import H1 from '../../../blocks/title'
import Container from '../../../blocks/container'
import {
  DemoButton, Satelite, Earth, Data, Processing,
} from './style'

export default class HowItWorks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sateliteLaunched: false,
      dataSent: false,
      dataRecieved: false,
    }
  }

  sendSateliteToSpace = () => {
    const { sateliteLaunched } = this.state

    this.setState({ sateliteLaunched: !sateliteLaunched })
  }

  sendData = () => {
    this.setState({ dataSent: true })
    setTimeout(this.process, 2000)
    setTimeout(() => this.setState({ dataSent: false }), 5000)
    setTimeout(() => this.setState({ dataRecieved: true }), 6500)
  }

  process = () => {
    this.setState({ isProcessing: true })
    setTimeout(() => { this.setState({ isProcessing: false }) }, 3000)
  }

  render() {
    const {
      sateliteLaunched, dataSent, isProcessing, dataRecieved,
    } = this.state

    return (
      <Container>
        <H1>Przebieg komunikacji</H1>
        <DemoButton onClick={this.sendSateliteToSpace}>new Worker()</DemoButton>
        <DemoButton onClick={this.sendData}>worker.postMessage(message)</DemoButton>
        <DemoButton ninja dataRecieved={dataRecieved}>worker.onmessage(message)</DemoButton>
        <Earth />
        <Satelite launched={sateliteLaunched} isProcessing={isProcessing} />
        <Processing isProcessing={isProcessing} />
        <Data sent={dataSent} />
      </Container>
    )
  }
}
