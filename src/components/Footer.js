import React from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {Link} from "react-router-dom"
import styled from 'styled-components'

const Footer = () => {
  return (
  <DivEstilizada>

        <Link to="/login"><HomeRoundedIcon color="action" fontSize="large"/></Link> 
         <Link to="/perfil"><PermIdentityIcon color="action" fontSize="large"/></Link>
         <Link to="/carrinho"><ShoppingCartIcon color="action" fontSize="large"/></Link>

</DivEstilizada>
  
    
   
    
  )
}


export default Footer;


const DivEstilizada=styled.div`
display-flex;
flex-direction:row
align-items:center;
justify-content:space-between ;
position:absolute;
bottom:55px;

width:100%;

`