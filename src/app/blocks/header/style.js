import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import media from '../../style/media'
import { hover } from '../../style/pseudo'
import { primaryColorLight, primaryColor, primaryColorDark } from '../../style/colors'

export const controlPanelSize = '4em'
export const headerSize = (scale = 1) => `${3 * scale}em`

export const HeaderContainer = styled.header`
  display: block;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
`

export const Navigation = styled.nav`
  height: ${headerSize()};
  width: 100%;
  background: ${primaryColorDark};
  box-shadow: 0 0.25em 0.25em 0 rgba(0, 0, 0, 0.14);
  display: flex;
  justify-content: flex-end;
`

const transformOffset = '3em'

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;

  ${media.upToDesktop`
    height: ${headerSize(3)};
    overflow: hidden;
    transition: transform .5s;
    position: absolute;
    width: 100%;
    background: ${primaryColor};
    flex-direction: column;
    z-index: -1;
    top: -${transformOffset};    

    ${props => !props.hidden && css`
      transform: translateY(calc(${headerSize()} + ${controlPanelSize} + ${transformOffset}));    
    `}
  `}
`

export const MenuItem = styled.li`
  text-align: center;
  flex: 1;
  line-height: ${headerSize()};
  text-transform: uppercase;
  font-weight: 800;
  cursor: pointer;
  transition: all .2s ease;
  color: #fff;
  display: flex;
  background: ${props => (props.active ? primaryColorLight : 'unset')};

  ${hover`
    background: ${primaryColorLight};  
  `}

  ${media.upToDesktop`
    flex: 1;  
  `}
`

export const NavigationLink = styled(Link)`
  flex: 1;
  color: #fff;
  text-decoration: none;
`
export const ControlPanel = styled.div`
  background: ${primaryColorDark};
  border-bottom: 1px solid ${primaryColor};
  height: ${controlPanelSize};
  display: flex;
`

export const Logo = styled.h1`
  font-weight: 800;
  color: white;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
`
