import styled from 'styled-components'
import Loader from './Loader'

const Output = () => {

    return (
        <TranslatorOutput>
            <Loader />
        </TranslatorOutput>
    )
}

const TranslatorOutput = styled.div`
    position: relative;
    width: 50%;
    height: 300px;
`

export default Output