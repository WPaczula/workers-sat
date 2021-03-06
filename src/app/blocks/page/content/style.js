import styled from 'styled-components'
import { headerSize } from '../../header/style'

const StyledContent = styled.main`
    display: flex;  
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    margin-top: ${headerSize()};
    white-space: pre-wrap;
`

export default StyledContent
