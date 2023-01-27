import { FC } from 'react'
import styled from 'styled-components'
import { MAX_INPUT_LENGTH } from '../../features/translator/TranslatorScreen'

type TranslatorInfoProps = {
    inputValue: string
}

const TranslatorInfo: FC<TranslatorInfoProps> = ({ inputValue }) => {

    return (
        <Container>
            <LanguageHint>Spanish</LanguageHint>
            <TypesCounter>
                {inputValue.length}/{MAX_INPUT_LENGTH}
            </TypesCounter>
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