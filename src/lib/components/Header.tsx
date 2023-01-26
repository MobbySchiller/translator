import styled from 'styled-components'
import useTranslations from '../hooks/useTranslations'
import logo from '../../assets/logo.jpg'
import { APP_CONFIG } from '../config/config'

const Header = () => {
    const T = useTranslations()

    return (
        <HeaderContainer>
            <Wrapper>
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
            </Wrapper>
        </HeaderContainer >
    )
}

const HeaderContainer = styled.header`
    padding: 4px 12px;
    background-color: ${({ theme }) => theme.colors.foreground};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: ${({ theme }) => theme.colors.secondary}
`

const Wrapper = styled.div`
display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
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