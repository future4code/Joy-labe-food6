import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Busca from '../pages/Busca'
import Feed from '../pages/Feed'
import PagInicial from './../pages/PagInicial';
import Perfil from '../pages/Perfil';
import Carrinho from '../pages/Carrinho'

const Router = () => {
  return (
    <BrowserRouter>
   
      <Routes>
      <Route path="/" element={<PagInicial/>} />
        <Route path ="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path ="/busca" element={<Busca/>}/> 
        <Route path ="/feed" element={<Feed/>}/>  
        <Route path ="/perfil" element={<Perfil/>}/>  
        <Route path ="/carrinho" element={<Carrinho/>}/>  




        {/* <Route path ="/pagina-erro" element={<ErrorPage/>}/> */}
        </Routes>
    </BrowserRouter>
    
    
  
  );
}

export default Router;
