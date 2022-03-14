import React, { useEffect } from "react";
import { SignupContainer, FormStyled } from "./styles";
import Logo from "../../img/logo-future-eats-invert.png";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function SignUpPage() {
  const history = useHistory();
  // const [hasAdress, setHasAdress] = useState("");
  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/");
    }
  }, [history]);

  const handleSignup = async (event) => {
    event.preventDefault();

    const body = {
      name: form.nome,
      email: form.email,
      cpf: form.cpf,
      password: form.senha,
    };

    try {
      const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/signup`,
        body
      );
      console.log("RESPONSE", response);
      localStorage.setItem("token", response.data.token);

      // setHasAdress(response.user.hasAdress)
      // console.log("HAS Adress", response.user.hasAdress);
      history.push("/signup/address");
    } catch (error) {
      alert("Cadastro falhou, tente novamente.");
      console.error(error);
    }
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <div>
      <Header showBackButton />
      <SignupContainer>
        <img src={Logo} alt="logo" />
        <br />
        <Typography align="center" component="h1" variant="h5">
          Cadastrar
        </Typography>
        <FormStyled>
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            fullWidth
            id="nome"
            label="Nome"
            name="nome"
            value={form.nome}
            required
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            value={form.email}
            required
          />
          <TextField
            inputProps={{ pattern: "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" }}
            onChange={onChange}
            variant="outlined"
            margin="normal"
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            value={form.cpf}
            required
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            fullWidth
            name="senha"
            label="Senha"
            type="password"
            id="senha"
            value={form.senha}
            required
          />
          <br />
          <Button
            onClick={handleSignup}
            color="primary"
            fullWidth
            variant="contained"
          >
            Criar
          </Button>
          <Grid container>
            <Grid item>
              <br />
              <Link align="center" onClick={goToLoginPage} variant="body2">
                {"Já possui cadastro? Clique aqui."}
              </Link>
            </Grid>
          </Grid>
        </FormStyled>
      </SignupContainer>
    </div>
  );
}

export default SignUpPage;
