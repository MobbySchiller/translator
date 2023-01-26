import styled from 'styled-components'

const Input = () => {

    return (
        <TranslatorInput placeholder='Enter the text to be translated' />
    )
}

const TranslatorInput = styled.textarea`
    width: 50%;
    height: 300px;
    padding: 30px;
    border: none;
    border-radius: 0;
    border-bottom-left-radius: 6px;
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.border};
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondary};
    z-index: 3;
    resize: none;

    &:focus {
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
    }
`

export default Input