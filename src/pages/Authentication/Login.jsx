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
import {Link} from 'react-router-dom';
// import { auth } from './firebase';

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);

  // const handleLogin = () => {
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       <Link to={'/'}></Link>
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  // };
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
        <Link to={'/recovery-password'}>
           Esqueceu sua senha?
        </Link>
      </Typography>
      <Link to={'/'}>
        <Button
        variant="contained"
        fullWidth
        color="primary"
        size="large"
        // onClick={handleLogin}
        style={{ borderRadius: '25px', marginTop: '20px' }}
        startIcon={<ArrowRightAlt />}
      >
        ENTRAR
      </Button>
      </Link>
      
      <Typography variant="subtitle1" align="center" marginTop="20px">
        
        Ainda não possui uma conta? 
        <Link to={'/register'}>Cadastre-me</Link>
      </Typography>
    </Container>
  );
}

export default Login;
