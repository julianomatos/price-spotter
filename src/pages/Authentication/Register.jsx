// import React from 'react';
import React, { useState } from 'react';
import Logo from "../../assets/logo.png"
import {
    Container,
    Typography,
    TextField,
    Button,
    IconButton,
    Checkbox,
} from '@mui/material';
import { AccountCircle, Lock, ArrowRightAlt } from '@mui/icons-material';

function Register() {

    const [lembrarSenha, setLembrarSenha] = useState(false);

    const handleLembrarSenhaChange = (event) => {
        setLembrarSenha(event.target.checked);
    };
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
                Insira seus dados para cadastrar
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
                }}
            />
            <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
                placeholder="Confirme sua senha"

                InputProps={{
                    startAdornment: (
                        <IconButton edge="start">
                            <Lock />
                        </IconButton>
                    ),
                }}
            />
            <Typography variant="subtitle1" align="right" marginTop="5px">
                <Checkbox
                    checked={lembrarSenha}
                    onChange={handleLembrarSenhaChange}
                    color="primary"
                />
                Lembrar senha
            </Typography>
            <Button
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                style={{ borderRadius: '25px', marginTop: '20px' }}
                startIcon={<ArrowRightAlt />}
            >
                Cadastrar
            </Button>
            <Typography variant="subtitle1" align="center" marginTop="20px">
                <a href="#">Entrar</a>
            </Typography>
        </Container>
    );
}

export default Register;
