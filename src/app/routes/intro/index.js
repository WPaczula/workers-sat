import React from 'react'
import Slider from '../../blocks/slider'
import MultiThreading from './multithread'
import H1 from '../../blocks/title'
import Async from './async'
import SyncVsAsync from './sync-vs-async'
import Container from '../../blocks/container'

const Intro = () => (
  <Slider slides={
    [
      {
        name: 'title1',
        children: <H1>Wielowątkowość w JS? 🤔</H1>,
      },
      {
        name: '1 thread',
        children: <MultiThreading />,
      },
      {
        name: 'async',
        children: <Async />,
      },
      {
        name: 'syncVsAsync',
        children: <SyncVsAsync />,
      },
      {
        name: 'hard things',
        children: <Container><H1>Trudniejsze rzeczy? 👨‍🎓</H1></Container>,
      },
    ]
  }
  />
)

export default Intro
