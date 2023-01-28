import { FC, useCallback } from 'react'
import styled from 'styled-components'
import useTranslations from '../hooks/useTranslations'
import { MAX_INPUT_LENGTH } from '../../features/translator/TranslatorScreen'
import { AutoDetectedLanguage } from '../models/AutoDetectedLanguage'
import { LanguageCode } from '../models/Languages'

type TranslatorInfoProps = {
    inputValue: string,
    hasError: boolean
    autoDetectedLanguage?: AutoDetectedLanguage,
    onClick(): void,
}

const TranslatorInfo: FC<TranslatorInfoProps> = ({
    inputValue,
    hasError,
    autoDetectedLanguage = {},
    onClick,

}) => {
    const T = useTranslations()

    const { language } = autoDetectedLanguage

    const getDetectedLanguage = useCallback(() => {
        if (!language) return undefined
        const detectedLanguage = Object
            .entries(LanguageCode)
            .find(([, languageCode]) => language === languageCode) || []

        return detectedLanguage ? `(${detectedLanguage})` : undefined
    }, [language])

    return (
        <Container>
            <LanguageHintContainer>
                <LanguageHint>
                    {hasError ? T.components.translatorInfo.error : T.components.translatorInfo.change}
                    <Language
                        onClick={onClick}
                    // disabled={hasError}
                    >
                        {language && `(${getDetectedLanguage()})`}
                        {/* Spanish */}
                    </Language>
                </LanguageHint>
            </LanguageHintContainer>
            <TypesCounter>
                {inputValue.length}/{MAX_INPUT_LENGTH}
            </TypesCounter>
        </Container >
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

const LanguageHintContainer = styled.span`
    cursor: pointer;
`
const LanguageHint = styled.span`
`

const Language = styled.span`
    margin-left: 4px;
    text-decoration: underline;
    font-weight: 700;
`

const TypesCounter = styled.span``

export default TranslatorInfo