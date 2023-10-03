import React from 'react';
import Logo from "../../assets/logo.png"
import {
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import { AccountCircle, Lock, ArrowRightAlt } from '@mui/icons-material';

function Login() {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h4"
        align="center"
        marginTop="20px"
        fontFamily={"Lalezar"}
        fontSize={24}
        fontWeight={400}
      >
        PriceSpotter
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        marginTop="10px"
        fontFamily={"Open Sans"}
        fontWeight={400}
      >
        Encontre o melhor preço do jeito mais fácil
      </Typography>
      <img
        src={Logo}
        alt="Logo do PriceSpotter"
        style={{ width: '300px', height: '170px', display: 'block', margin: '0 auto' }}
      />
      <Typography variant="h5" align="center" marginTop="20px">
        Bem-vindo
      </Typography>
      <Typography variant="subtitle1" align="center">
        Efetue o login para continuar
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        variant="outlined"
        placeholder="Digite seu email"
        InputProps={{
          startAdornment: (
            <IconButton edge="start">
              <AccountCircle />
            </IconButton>
          ),
        }}
      />
      <TextField
        fullWidth
        margin="normal"
        variant="outlined"
        type="password"
        placeholder="Digite sua senha"

        InputProps={{
          startAdornment: (
            <IconButton edge="start">
              <Lock />
            </IconButton>
          ),
          classes: {
            root: 'MuiOutlinedInput-root',
            notchedOutline: 'MuiOutlinedInput-notchedOutline',
          },
        }}
      />
      <Typography variant="subtitle1" align="right" marginTop="5px">
        Esqueceu sua senha?
      </Typography>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        size="large"
        style={{ borderRadius: '25px', marginTop: '20px' }}
        startIcon={<ArrowRightAlt />}
      >
        ENTRAR
      </Button>
      <Typography variant="subtitle1" align="center" marginTop="20px">
        Ainda não possui uma conta? <a href="#">Cadastre-me</a>
      </Typography>
    </Container>
  );
}

export default Login;
