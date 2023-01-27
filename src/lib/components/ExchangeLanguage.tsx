import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

type ExchangeLanguageProps = {
    hidden: boolean,
    onClick(): void
}

const ExchangeLanguage: FC<ExchangeLanguageProps> = ({ hidden, onClick }) => {


    return (
        <Container
            onClick={onClick}
        >
            {!hidden && <FontAwesomeIcon icon={faArrowRightArrowLeft} />}
        </Container >
    )
}

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 20px;
    cursor: pointer;
`
export default ExchangeLanguage