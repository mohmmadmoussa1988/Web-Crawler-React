import React from 'react';
import {HeaderContainer,BackButton,LogoDiv} from './header.styles';
import { Link } from "react-router-dom";
import Logo from '../logo/logo';

const Header = () =>{
    return(
     <HeaderContainer>
         <BackButton>
         <Link to="/">Back</Link>
         </BackButton>
         <LogoDiv>
             <Logo />
         </LogoDiv>
         
     </HeaderContainer>
    )
}

export default Header;