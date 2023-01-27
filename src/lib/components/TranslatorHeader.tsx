import { FC, useState } from 'react'
import styled from 'styled-components'
import Selector from '../../lib/components/Selector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Language, LanguageCode } from '../models/Languages'
import { SelectedLanguages } from '../types/selectedLanguages'

type TranslatorHeader = {
    languages: Array<Language>
}

const TranslatorHeader: FC<TranslatorHeader> = ({ languages }) => {
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({
        source: LanguageCode.Polish,
        target: LanguageCode.English
    })

    return (
        <Container>
            <SelectorContainer>
                <Selector
                    languages={languages}
                    exclude={[selectedLanguages.target]}
                    onChange={newCode => setSelectedLanguages(prevState => ({
                        ...prevState,
                        source: newCode
                    }))}
                    selectedLanguage={selectedLanguages.source}
                />
            </SelectorContainer>
            <SelectorContainer>
                <Selector
                    languages={languages}
                    exclude={[selectedLanguages.source]}
                    onChange={newCode => setSelectedLanguages(prevState => ({
                        ...prevState,
                        target: newCode
                    }))}
                    selectedLanguage={selectedLanguages.target}
                />
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
    background-color: ${({ theme }) => theme.colors.foreground};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
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