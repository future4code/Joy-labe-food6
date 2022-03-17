import React from "react"
import Footer from '../components/Footer'
import {SreenContainer, InputsContainer, SignUpButtonContainer} from "./StyledLogin"
import useForm from '../hooks/useForm';
import { TextField } from '@material-ui/core';
import {Button} from '@material-ui/core';
import axios from 'axios'

const Cadastro = ()=> {

  const [form, onChange, clear] = useForm({name:"",email:"", password:""})
  
  const onSubmitForm = (event) =>{
    event.preventDefault()
    console.log(form)
    
  }

  const login = ()=>{
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/login`)

  
  }


  return(
    <div >
     
     <h1>Crie sua conta</h1>

    

     <SreenContainer>
      
      <InputsContainer>
        <form onSubmit={onSubmitForm}> 

        <TextField 
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={'normal'}
            required
            type={'name'}
          />

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
            Cadastrar
            
          </Button>

        </form>

      </InputsContainer>
      <SignUpButtonContainer>

      
        
           
        

      </SignUpButtonContainer>

     
      <Footer/>
    </SreenContainer>








    <Footer/>

    </div>
  )
}

export default Cadastro;

