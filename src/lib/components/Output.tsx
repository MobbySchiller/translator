import styled from 'styled-components'
import Loader from './Loader'

const Output = () => {

    return (
        <TranslatorOutput>
            <p>tekstowo</p>
            {/* <Loader /> */}
        </TranslatorOutput>
    )
}

const TranslatorOutput = styled.div`
    position: relative;
    width: 50%;
    height: 300px;
    padding: 30px;
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border};
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`

export default Output