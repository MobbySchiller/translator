import { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../lib/styles'

export const App: FC = () => {

    return (
        <ThemeProvider theme={theme}>
            <div>
                App
            </div>
        </ThemeProvider>
    )
}

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    backgroundColor: ${({ theme }) => theme.colors.background}
`
