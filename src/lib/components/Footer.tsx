import { APP_CONFIG } from '../config/config'
import styled from 'styled-components'
import useTranslations from '../hooks/useTranslations'

const Footer = () => {
    const T = useTranslations()

    return (
        <FooterContainer>
            <Link href={APP_CONFIG.GITHUB_URL}>
                {T.components.footer.credits}
            </Link>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    padding: 4px 12px;
    background-color: ${({ theme }) => theme.colors.foreground};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: center;
`

const Link = styled.a`
    color: ${({ theme }) => theme.colors.secondary}
`

export default Footer