import styled from 'styled-components'

const Loader = () => {

    return (
        <Spinner />
    )
}


const Spinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    aspect-ratio: 1/1;
    border: 4px solid ${({ theme }) => theme.colors.secondary};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    } 
`

export default Loader