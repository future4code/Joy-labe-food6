import React, { useEffect } from "react";
import { LoginContainer, FormStyled } from "./styles";
import Logo from "../../img/logo-future-eats-invert.png";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import theme from "../../constants/theme";
import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

function LoginPage() {
  const history = useHistory();
  // const [hasAddress, setHasAddress] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/");
    }
  }, [history]);

  const [form, onChange] = useForm({
    email: "",
    password: "",
  });

  const handleLogin = async (event) => {
    const body = {
      email: form.email,
      password: form.password,
    };

    try {
      event.preventDefault();
      const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/login`,
        body
      );
      localStorage.setItem("token", response.data.token);
      // setHasAddress(response.data.user.hasAddress);
      handleLogin(form);

      // console.log("RESPONSE TOKEN", response.data.token);
      // console.log("user", response.data.user.hasAddress);

      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const goToSignupPage = () => {
    history.push("/signup");
  };

  return (
    <ThemeProvider theme={theme}>
      <LoginContainer>
        <img src={Logo} alt="logo" />
        <br />
        <Typography align="center" component="h1" variant="h5">
          Entrar
        </Typography>
        <FormStyled>
          <TextField
            onChange={onChange}
            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={form.email}
            autoFocus
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={form.password}
          />
          <br />
          <Button
            onClick={handleLogin}
            color="primary"
            type="submit"
            fullWidth
            variant="contained"
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <br />
              <Link align="center" onClick={goToSignupPage} variant="body2">
                {"Não possui cadastro? Clique aqui."}
              </Link>
            </Grid>
          </Grid>
        </FormStyled>
      </LoginContainer>
    </ThemeProvider>
  );
}

export default LoginPage;
