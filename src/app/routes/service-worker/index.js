import React from 'react'
import Slider from '../../blocks/slider'
import H1 from '../../blocks/title'
import WhatIsIt from './what-is-it'
import LifeCycle from './life-cycle'

const ServiceWorkers = () => (
  <Slider slides={
    [
      {
        name: 'hello',
        children: <H1>Service Worker 🚀</H1>,
      },
      {
        name: 'whatIsThat',
        children: <WhatIsIt />,
      },
      {
        name: 'lifeCycle',
        children: <LifeCycle />,
      },
      {
        name: 'demo',
        children: <H1>Demo time 🕔</H1>,
      },
    ]
  }
  />
)

export default ServiceWorkers
