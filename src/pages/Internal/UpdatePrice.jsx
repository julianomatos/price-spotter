import React from 'react';
import { Container, Typography, TextField, Button, IconButton, BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Search, Room, Person, Add } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';


function UpdatePrice() {
  return (
    <Container maxWidth="sm" style={{ backgroundColor: '#f6f6f6', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4" align="center" marginTop="20px">
        PriceSpotter
      </Typography>
      <Typography variant="subtitle1" align="center" marginTop="10px">
        Atualize o preço
      </Typography>
      <Box display="flex" alignItems="center" marginTop="20px">
        <IconButton color="primary" aria-label="location" component="span">
          <Room />
        </IconButton>
        <Typography variant="body1" color="textPrimary" marginLeft="10px">
          Você está aqui
        </Typography>
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        placeholder="Digite para buscar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ marginTop: '20px' }}
      />
      {/* Espaço em branco para mostrar o produto escolhido */}
      <div style={{ height: '100px', backgroundColor: 'white' }}></div>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        placeholder="Informe o novo preço"
        sx={{ backgroundColor: 'white', marginTop: '10px' }}
      />
      <Button variant="contained" color="primary" fullWidth sx={{ marginTop: '20px' }}>
        Atualizar
      </Button>
      <Box display="flex" justifyContent="center" marginTop="auto">
        <BottomNavigation showLabels style={{ width: '100%' }}>
          <BottomNavigationAction label="Perfil" icon={<Person />} />
          <BottomNavigationAction label="Adicionar" icon={<Add />} />
          <BottomNavigationAction label="Busca" icon={<Search />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
}

export default UpdatePrice;
