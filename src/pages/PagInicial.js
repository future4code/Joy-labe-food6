import React from 'react';
import {SreenContainer, LogoImage} from "./StyledLogin"
import Logo from '../Images/Logo.png'

const PagInicial = () =>{

    
    return ( 
      <SreenContainer>
        <LogoImage src={Logo}/>
      </SreenContainer>)
}

export default PagInicial;