import React, { useState, useEffect } from "react";
import axios from "axios";
import { EditPerfilContainer, FormStyled } from "./styles";
import useForm from "../../hooks/useForm";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

function EditPerfilPage() {
  const history = useHistory();
  useProtectedPage();
  // useEffect(() => {}, []);

  const [profile, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const putUpdateProfile = (event) => {
    event.preventDefault();
    const body = {
      name: profile.name,
      email: profile.email,
      cpf: profile.cpf,
    };

    console.log("body", body);
    const token = localStorage.getItem("token");

    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert("Perfil editado com sucesso");
        history.push("/perfil");
      })
      .catch((error) => {
        alert("Erro ao editar perfil");
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <EditPerfilContainer>
        <Header title={"Editar"} showBackButton />
        <FormStyled>
          <TextField
            onChange={onChange}
            value={profile.name}
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Nome"
            name="name"
            required
          />
          <TextField
            onChange={onChange}
            value={profile.email}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            required
          />
          <TextField
            onChange={onChange}
            value={profile.cpf}
            variant="outlined"
            margin="normal"
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            required
          />
          <br />
          <Button
            onClick={putUpdateProfile}
            color="primary"
            type="submit"
            fullWidth
            variant="contained"
          >
            Salvar
          </Button>
        </FormStyled>
      </EditPerfilContainer>
    </ThemeProvider>
  );
}

export default EditPerfilPage;
