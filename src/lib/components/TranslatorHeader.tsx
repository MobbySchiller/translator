import styled from 'styled-components'
import Selector from '../../lib/components/Selector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

const TranslatorHeader = () => {

    return (
        <Container>
            <SelectorContainer>
                <Selector />
            </SelectorContainer>
            <SelectorContainer>
                <Selector />
            </SelectorContainer>
            <FontAwesomeContainer>
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </FontAwesomeContainer>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const SelectorContainer = styled.div`
    width: 50%;
`

const FontAwesomeContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 20px;
`

export default TranslatorHeader