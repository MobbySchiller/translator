import { FC, useMemo } from 'react'
import styled from "styled-components"
import { Language, LanguageCode } from "../models/Languages"

type SelectorProps = {
    languages: Array<Language>,
    selectedLanguage: LanguageCode,
    exclude: Array<LanguageCode>,
    onChange(newCode: LanguageCode): void,
}

const Selector: FC<SelectorProps> = ({ languages, selectedLanguage, exclude, onChange }) => {

    const filteredLanguages = useMemo(() => languages
        .filter(language => !exclude.includes(language.code))
        .map(languages => ({
            key: languages.code,
            label: languages.name
        })), [languages, exclude])

    return (
        <Select
            value={selectedLanguage}
            onChange={event => onChange(event.target.value as LanguageCode)}
        >
            {filteredLanguages.map(language => (
                <option
                    key={language.key}
                    value={language.key}
                >
                    {language.label}
                </option>
            ))}
        </Select>
    )
}

const Select = styled.select`
    margin-left: 30px;
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 6px;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
    outline-color: ${({ theme }) => theme.colors.secondary};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.secondary};
    }
`


export default Selector