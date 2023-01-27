import React, { FC } from 'react'
import styled from 'styled-components'
import Input from './Input'
import Output from './Output'
import { Query } from '../models/Query'

type TranslatorBodyProps = {
    input: {
        query: Query,
        setQuery: React.Dispatch<React.SetStateAction<Query>>
    }
}

const TranslatorBody: FC<TranslatorBodyProps> = ({ input }) => {
    const { query, setQuery } = input

    return (
        <Container>
            <Input
                value={query.inputValue}
                onChange={newValue => {
                    setQuery(prevState => ({
                        ...prevState,
                        inputValue: newValue,
                    }))
                }}
            />
            <Output
                value={query.outputValue}
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

export default TranslatorBody