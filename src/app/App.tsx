import { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../lib/styles/theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TranslatorScreen from '../components/TranslatorScreen'

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
