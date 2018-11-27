import styled from 'styled-components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const StyledSlide = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`

export const StyledSlideTitle = styled.h1`
  text-align: center;
`

export default class Slide extends Component {
  static contextTypes = {
    scroll: PropTypes.object,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { scroll } = this.context
    const { name } = this.props

    scroll.register(name, this._element)
  }

  componentWillUnmount() {
    const { scroll } = this.context
    const { name } = this.props

    scroll.unregister(name)
  }

  render() {
    const { children } = this.props

    return (
      React.cloneElement(<StyledSlide>{children}</StyledSlide>, {
        ref: (ref) => { this._element = ref },
      })
    )
  }
}
