import { FC, useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../lib/styles/theme'
import Header from '../lib/components/Header'
import Footer from '../lib/components/Footer'
import Loader from '../lib/components/Loader'
import Message from '../lib/components/Message'
import TranslatorScreen from '../features/translator/TranslatorScreen'
import useTranslations from '../lib/hooks/useTranslations'
import useSupportedLanguages from '../lib/hooks/useSupportedLanguages'
import { Language } from '../lib/models/Languages'

export const App: FC = () => {
    const [languages, setLanguages] = useState<Array<Language>>([])
    const { isLoading, hasError, fetch: getSupportedLanguages } = useSupportedLanguages(setLanguages)

    const T = useTranslations()

    useEffect(() => {
        getSupportedLanguages()
    }, [])


    const getLayout = () => {
        if (isLoading) {
            return (
                <Loader />
            )
        }

        if (hasError) {
            return (
                <Message
                    message={T.components.app.error}
                    withButton
                    onClick={() => getSupportedLanguages()}
                />
            )
        }

        if (languages.length === 0) {
            return (
                <Message
                    message={T.components.app.empty}
                />
            )
        }

        return (
            <TranslatorScreen languages={languages} />
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <Header />
                {getLayout()}
                <Footer />
            </AppContainer>
        </ThemeProvider>
    )
}

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background}
`
