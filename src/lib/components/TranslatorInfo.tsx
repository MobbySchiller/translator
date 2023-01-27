import { FC } from 'react'
import styled from 'styled-components'

const TranslatorInfo: FC = () => {

    return (
        <Container>
            <LanguageHint>Spanish</LanguageHint>
            <TypesCounter>120/3000</TypesCounter>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 6px 0;
    width: 50%;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
`

const LanguageHint = styled.span`
    text-decoration: underline;
`

const TypesCounter = styled.span``

export default TranslatorInfo