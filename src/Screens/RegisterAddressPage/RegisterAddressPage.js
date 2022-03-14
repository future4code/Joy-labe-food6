import React from "react";
import { FormStyled, RegisterAddressContainer } from "./styles";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header/Header";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";
import { Button } from "@material-ui/core";

function RegisterAddressPage() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  useProtectedPage();

  const [form, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const handleAddAddress = (event) => {
    event.preventDefault();

    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };

    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/address`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        localStorage.removeItem(token);
        alert("Endereço adicionado com sucesso")
        localStorage.setItem("token", response.user.token);
        history.push("/feed");
      })
      .catch((error) => {
        alert("Erro ao cadastrar endereço");
      });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header showBackButton />
        <RegisterAddressContainer>
          <Typography component="h1" variant="h5">
            Meu endereço
          </Typography>
          <FormStyled>
            <TextField
              onChange={onChange}
              variant="outlined"
              fullWidth
              id="logradouro"
              label="Rua / Avenida"
              name="street"
              value={form.street}
              required
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              fullWidth
              id="numero"
              label="Número"
              name="number"
              type="number"
              value={form.number}
              required
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              fullWidth
              id="bairro"
              label="Bairro"
              name="neighbourhood"
              value={form.neighbourhood}
              required
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              fullWidth
              id="cidade"
              label="Cidade"
              name="city"
              value={form.city}
              required
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              fullWidth
              id="estado"
              label="Estado"
              name="state"
              value={form.state}
              required
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              fullWidth
              id="complemento"
              label="Apto / Bloco"
              name="complement"
              value={form.complement}
            />
            <Button
              onClick={handleAddAddress}
              color="primary"
              type="submit"
              fullWidth
              variant="contained"
            >
              Salvar
            </Button>
          </FormStyled>
        </RegisterAddressContainer>
      </ThemeProvider>
    </div>
  );
}

export default RegisterAddressPage;
