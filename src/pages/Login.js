import { TextField } from '@material-ui/core';
import React from 'react';
import useForm from '../hooks/useForm';
import {SreenContainer, InputsContainer, SignUpButtonContainer} from "./StyledLogin"
import {Button} from '@material-ui/core';
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import axios from'axios'

const Login = () =>{

  const [form, onChange, clear] = useForm({email:"", password:""})

  const onSubmitForm = (event) =>{
    event.preventDefault()
    login()
    
  }

  const login =()=>{

    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/login`,form)
    .then((res)=>{
      localStorage.setItem("token",res.data.token)
      clear()
    })
    .catch((err)=>alert("Erro no Login"))
    }
    
  return ( 
    <SreenContainer>
      
      <InputsContainer>
        <form onSubmit={onSubmitForm}> 
          <TextField 
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail*"}
            variant={"outlined"}
            fullWidth
            margin={'normal'}
            required
            type={'email'}
          />

          <TextField 
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha*"}
            variant={"outlined"}
            fullWidth
            margin={'normal'}
            required
            type={'senha'}
          />

          <Button
            type={'submit'}
            variant={"contained"}
            fullWidth
            color={'primary'}
            margin={'normal'}
          >
            Entrar
            
          </Button>
          
        </form>

      </InputsContainer>
      <SignUpButtonContainer>

        <Button
           
            type={'submit'}
            variant={"text"}
            fullWidth
            
          >
            
            <Link to="/cadastro"> Não possui cadastro? Clique aqui!</Link> 
         </Button>

      </SignUpButtonContainer>

     
      <Footer/>
    </SreenContainer>

    
  )
 
}
export default Login;

   
