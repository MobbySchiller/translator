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
`


export default Selector