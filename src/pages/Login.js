import { TextField } from '@material-ui/core';
import React from 'react';
import useForm from '../hooks/useForm';
import {SreenContainer, InputsContainer, SignUpButtonContainer} from "./StyledLogin"
import {Button} from '@material-ui/core';
// import { useHistory } from 'react-router';
// descomentar após o router feito



const Login = () =>{


  const [form, onChange, clear] = useForm({email:"", password:""})
  
  const onSubmitForm = (event) =>{
    event.preventDefault()
  }

//  const history = useHistory
// descomentar após o router feito

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
            required
            type={'email'}
          />

          <TextField 
            name={"password"}
            value={form.password}
            onChange={onchange}
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
          >
            Entrar
            
          </Button>

        </form>

      </InputsContainer>
      <SignUpButtonContainer>

        <Button
//            onClick={() => goToSignUp(history)}
// descomentar após o router feito
            type={'submit'}
            variant={"text"}
            fullWidth
          >
            Não possui cadastro? Clique aqui.
            
         </Button>

      </SignUpButtonContainer>

     
    
    </SreenContainer>

  )
}
export default Login;
