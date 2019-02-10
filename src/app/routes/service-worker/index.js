import React from 'react'
import Slider from '../../blocks/slider'
import H1 from '../../blocks/title'
import WhatIsIt from './what-is-it'
import LifeCycle from './life-cycle'
import Register from './register'
import Install from './install'
import Activate from './activate'
import Handle from './handle'

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
        name: 'register',
        children: <Register />,
      },
      {
        name: 'install',
        children: <Install />,
      },
      {
        name: 'activate',
        children: <Activate />,
      },
      {
        name: 'handle',
        children: <Handle />,
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
