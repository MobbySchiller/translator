import { FC, useState } from 'react'
import styled from 'styled-components'
import Selector from '../../lib/components/Selector'
import { Language, LanguageCode } from '../models/Languages'
import { SelectedLanguages } from '../types/selectedLanguages'
import ExchangeLanguage from './ExchangeLanguage'
import { Query } from '../models/Query'

type TranslatorHeader = {
    setQuery: React.Dispatch<React.SetStateAction<Query>>,
    languages: Array<Language>
}

const TranslatorHeader: FC<TranslatorHeader> = ({ setQuery, languages }) => {
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({
        source: LanguageCode.Auto,
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
                    exclude={[selectedLanguages.source, LanguageCode.Auto]}
                    onChange={newCode => setSelectedLanguages(prevState => ({
                        ...prevState,
                        target: newCode
                    }))}
                    selectedLanguage={selectedLanguages.target}
                />
            </SelectorContainer>
            <ExchangeLanguage
                hidden={selectedLanguages.source === LanguageCode.Auto}
                onClick={() => {
                    setSelectedLanguages(prevState => ({
                        source: prevState.target,
                        target: prevState.source
                    }))
                    setQuery(prevState => ({
                        inputValue: prevState.outputValue,
                        outputValue: prevState.inputValue
                    }))
                }
                }
            />
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

export default TranslatorHeader