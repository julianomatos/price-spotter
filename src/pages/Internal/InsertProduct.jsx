import React from 'react';
import { Container, Typography, TextField, Button, IconButton, BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { PhotoCamera, Person, Search, Edit } from '@mui/icons-material';
import {Link} from 'react-router-dom';

function InsertProduct() {
    return (
        <Container maxWidth="sm" style={{ backgroundColor: '#f6f6f6', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" align="center" marginTop="20px">
                PriceSpotter
            </Typography>
            <Typography variant="subtitle1" align="center" marginTop="10px">
                Cadastre seu produto
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop="20px">
                <div style={{ width: '320px', height: '180px', border: '2px dashed #ccc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <input type="file" accept="image/*" style={{ display: 'none' }} />
                </div>
            </Box>
            <IconButton color="primary" aria-label="upload picture" style={{  width: '64px', height: '64px', backgroundColor: 'white', position: 'relative', bottom: '30px', margin: '0 auto' }}>
                <PhotoCamera />
            </IconButton>
            <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Descrição"
                sx={{ backgroundColor: 'white', marginTop: '20px' }}
            />
            <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Preço"
                sx={{ backgroundColor: 'white', marginTop: '10px' }}
            />
            <Button variant="contained" color="primary" fullWidth sx={{ marginTop: '20px' }}>
                Cadastrar
            </Button>
            <Box display="flex" justifyContent="center" marginTop="auto">
                <BottomNavigation showLabels style={{ width: '100%' }}>
                    <Link to={'/profile'}>
                         <BottomNavigationAction label="Perfil" icon={<Person />} />
                    </Link>
                    <Link to={'/'}>
                        <BottomNavigationAction label="Busca" icon={<Search />} />
                    </Link>
                    <Link to={'/update-price'}>
                         <BottomNavigationAction label="Editar" icon={<Edit />} />
                    </Link>
                </BottomNavigation>
            </Box>
        </Container>
    );
}

export default InsertProduct;
