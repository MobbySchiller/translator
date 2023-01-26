import { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../lib/styles/theme'
import Header from '../lib/components/Header'
import Footer from '../lib/components/Footer'
import TranslatorScreen from '../features/translator/TranslatorScreen'

export const App: FC = () => {

    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <Header />
                <TranslatorScreen />
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
