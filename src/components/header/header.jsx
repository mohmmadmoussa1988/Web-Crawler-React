import React from 'react';
import { HeaderContainer, BackButton, LogoDiv } from './header.styles';
import { Link } from "react-router-dom";
import Logo from '../logo/logo';

const Header = () => {
    return (
        <HeaderContainer>

            <LogoDiv>
                {window.location.href.substring(window.location.href.lastIndexOf('/') + 1) == "analyze" &&
                    <BackButton>
                        <Link to="/">Back</Link>
                    </BackButton>
                }
                <Logo />
            </LogoDiv>

        </HeaderContainer>
    )
}

export default Header;