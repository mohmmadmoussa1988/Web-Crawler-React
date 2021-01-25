import React from 'react';
import logo from '../../assets/Sixt-Logo.svg.png';
import {LogoImage} from './logo.styles';
import { Link } from "react-router-dom";

const Logo = () =>{
    return(
       <Link to="/"><LogoImage src={logo} /></Link>
    )
}

export default Logo;