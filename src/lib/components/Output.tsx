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
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondary};
`

export default Output