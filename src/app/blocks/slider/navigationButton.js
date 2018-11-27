import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../button'

const NavigationButton = styled(Button)`
  right: 1em;
  min-width: 11em;
  margin-top: 1em;
  margin-bottom: 1em;
  flex: 1;
`

const NavigationButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  bottom: 0;
  right: 0;
  position: fixed;
`

export default function NavigationButtons({ onNextClick, onPrevClick }) {
  return (
    <NavigationButtonsContainer>
      <NavigationButton onClick={onNextClick}>Next</NavigationButton>
      <NavigationButton onClick={onPrevClick}>Previous</NavigationButton>
    </NavigationButtonsContainer>
  )
}

NavigationButtons.propTypes = {
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
}
