import { FC } from 'react'
import styled from 'styled-components'
import useTranslations from '../hooks/useTranslations'

type MessageProps = {
    message: string,
    withButton?: boolean,
    onClick?(): void
}

const Message: FC<MessageProps> = ({ message, withButton, onClick }) => {
    const T = useTranslations()

    return (
        <MessageContainer>
            <Text>{message}</Text>
            {withButton && (
                <Button
                    onClick={onClick}
                >
                    {T.components.message.tryAgain}
                </Button>
            )}
        </MessageContainer>
    )
}

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const Button = styled.button`
    margin-top: 10px;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`

const Text = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
`

export default Message