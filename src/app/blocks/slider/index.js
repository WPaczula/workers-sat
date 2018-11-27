import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import scrollIntoView from 'scroll-into-view'
import Slide from './slide'
import NavigationButtons from './navigationButton'

export default class Slider extends Component {
  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
      }),
    ),
  }

  static childContextTypes = {
    scroll: PropTypes.object,
  }

  elements = {}

  constructor(props) {
    super(props)

    this.state = {
      currentSlide: 0,
    }
  }

  getChildContext() {
    return {
      scroll: {
        register: this.register,
        unregister: this.unregister,
      },
    }
  }

  componentDidUpdate() {
    const { currentSlide } = this.state
    const { slides } = this.props

    this.scrollTo(slides[currentSlide].name)
  }

  register = (name, ref) => {
    this.elements[name] = ref
  }

  unregister = (name) => {
    delete this.elements[name]
  }


  scrollTo = (name) => {
    const node = findDOMNode(this.elements[name])
    scrollIntoView(node, {
      time: 700,
      align: {
        top: 0,
        topOffset: 120,
      },
    })
  }

  nextSlide = () => {
    const { currentSlide } = this.state
    const { slides } = this.props

    const nextIndex = currentSlide + 1
    this.setState({
      currentSlide: nextIndex < slides.length
        ? nextIndex
        : slides.length - 1,
    })
  }

  previousSlide = () => {
    const { currentSlide } = this.state

    const previousIndex = currentSlide - 1

    this.setState({
      currentSlide: previousIndex > 0
        ? previousIndex
        : 0,
    })
  }


  render() {
    const { slides } = this.props

    return (
      <>
        {
          slides.map(s => (
            <Slide name={s.name} key={s.name}>
              {s.children}
            </Slide>
          ))
        }
        <NavigationButtons
          onNextClick={this.nextSlide}
          onPrevClick={this.previousSlide}
        />
      </>
    )
  }
}
