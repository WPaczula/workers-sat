import React from 'react'
import Slider from '../../blocks/slider'
import H1 from '../../blocks/title'
import WhatIsIt from './what-is-it'
import HowItWorks from './how-it-works'
import DataExchange from './data-exchange'
import Demo from './demo'

const WebWorkers = () => (
  <Slider slides={
    [
      {
        name: 'hello',
        children: <H1 alone>Web Workery na ratunek! 🙌</H1>,
      },
      {
        name: 'whatIsIt',
        children: <WhatIsIt />,
      },
      {
        name: 'howItWorks',
        children: <HowItWorks />,
      },
      {
        name: 'dataExchange',
        children: <DataExchange />,
      },
      {
        name: 'demo',
        children: <Demo />,
      },
    ]
  }
  />
)

export default WebWorkers
