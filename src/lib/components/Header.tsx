import styled from 'styled-components'
import useTranslations from '../hooks/useTranslations'
import logo from '../assets/logo.jpg'
import { APP_CONFIG } from '../config/config'

const Header = () => {
    const T = useTranslations()

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={logo} />
                <Title>
                    {T.components.header.title}
                </Title>
            </LogoContainer>
            <LinksContainer>
                <Link
                    href={APP_CONFIG.API_URL}
                    target='_blank'
                >
                    {T.components.header.api}
                </Link>
                <Link
                    href={APP_CONFIG.GITHUB_URL}
                    target='_blank'
                >
                    {T.components.header.github}
                </Link>
            </LinksContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 4px 12px;
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.secondary}
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 40px;
    aspect-ratio: 1/1;
`

const Title = styled.h1`
    display: inline-block;
    margin-left: 5px;
    font-size: 24px;
`

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
`

const Link = styled.a`
    margin-left: 16px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 16px;
`

export default Header