import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
// import App from './App'
import Busca from '../pages/Busca'
import Feed from '../pages/Feed'

const Router = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path ="/login" element={<Login/>} />
        <Route path="/cadastro" element={<SignUp/>} />
        
        <Route path ="/busca" element={<Busca/>}/> 
        <Route path ="/feed" element={<Feed/>}/>  
 





        {/* <Route path ="/pagina-erro" element={<ErrorPage/>}/> */}
        </Routes>
    </BrowserRouter>
    
    
  
  );
}

export default Router;
