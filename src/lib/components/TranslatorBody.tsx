import styled from 'styled-components'
import Input from './Input'
import Output from './Output'

const TranslatorBody = () => {

    return (
        <Container>
            <Input />
            <Output />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

export default TranslatorBody