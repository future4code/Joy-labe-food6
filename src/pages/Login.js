import { TextField } from '@material-ui/core';
import React from 'react';
import useForm from '../hooks/useForm';
import {SreenContainer, InputsContainer} from "./StyledLogin"
import {Button} from '@material-ui/core';


const Login = () =>{

  const [form, onChange, clear] = useForm({email:"", password:""})
  
  const onSubmitForm = () =>{

  }
  return ( 
    <SreenContainer>

      <InputsContainer>
        <form onSubmit={onSubmitForm}> 
          <TextField 
            name={"email"}
            value={form.email}
            onChange={onchange}
            label={"E-mail*"}
            variant={"outlined"}
            fullWidth
            margin={'normal'}
          />

          <TextField 
            name={"password"}
            value={form.password}
            onChange={onchange}
            label={"Senha*"}
            variant={"outlined"}
            fullWidth
            margin={'normal'}
          />

          <Button
            variant={"contained"}
            fullWidth
          >
            Entrar
            
          </Button>

        </form>

      </InputsContainer>
    
    </SreenContainer>

  )
}
export default Login;
