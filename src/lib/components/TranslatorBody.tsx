import React, { FC } from 'react'
import styled from 'styled-components'
import Input from './Input'
import Output from './Output'
import { Query } from '../models/Query'
import { SelectedLanguages } from '../types/selectedLanguages'
import { LanguageCode } from '../models/Languages'
import useAutoDetectLanguage from '../hooks/useAutoDetectLanguage'
import { useDebouncedCallback } from 'use-debounce'
import { APP_CONFIG } from '../config/config'

type TranslatorBodyProps = {
    input: {
        query: Query,
        setQuery: React.Dispatch<React.SetStateAction<Query>>
    },
    selectedLanguages: SelectedLanguages
    autoDetectLanguage(query: string): void
}

const TranslatorBody: FC<TranslatorBodyProps> = ({ input, selectedLanguages, autoDetectLanguage }) => {
    const { query, setQuery } = input

    const debouncedAutoDetectLanguage = useDebouncedCallback(
        debouncedQuery => {
            if (debouncedQuery.length < APP_CONFIG.MIN_LENGTH_TO_AUTOTRANSLATE) return
            if (selectedLanguages.source === LanguageCode.Auto) {
                autoDetectLanguage(debouncedQuery)
            }
        }, 1000
    )

    return (
        <Container>
            <Input
                value={query.inputValue}
                onChange={newValue => {
                    setQuery(prevState => ({
                        ...prevState,
                        inputValue: newValue,
                    }))
                    debouncedAutoDetectLanguage(newValue)
                }}
            />
            <Output
                value={query.outputValue}
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

export default TranslatorBody