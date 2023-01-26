import styled from "styled-components"

const Selector = () => {

    return (
        <Select>
            <option value="polish">polish</option>
            <option value="english">english</option>
            <option value="french">french</option>
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