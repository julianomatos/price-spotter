
import React, { useState } from 'react';
import { Box, Container, Typography, TextField, InputAdornment, IconButton, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Search, FilterList, Person, Add, Edit } from '@mui/icons-material';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

function Home() {
    const [selectedTab, setSelectedTab] = useState('profile'); // Estado para controlar a guia selecionada

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    const containerStyle = {
        backgroundColor: '#f6f6f6', // Define a cor de fundo
        padding: '20px', // Adiciona um espaçamento interno opcional
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <Container style={containerStyle} maxWidth="sm">
            <Typography variant="h4" align="center" marginTop="20px">
                PriceSpotter
            </Typography>
            <Box marginTop="30px">
                <TextField
                    style={{ backgroundColor: 'white' }}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    marginTop="50px"
                    placeholder="Pesquisar"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FilterList />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            {/* <ProductCard
                imageUrl="https://m.media-amazon.com/images/I/61TWfJdgSIL.__AC_SX300_SY300_QL70_ML2_.jpg"
                description="Nome do Produto"
                price="$19.99"
                location="123 Main St, City"
                marketName="Nome do Mercado"
                distance="2.5"
            /> */}
            <Box display="flex" justifyContent="center">
                <BottomNavigation
                    value={selectedTab}
                    onChange={handleTabChange}
                    showLabels
                    style={{ position: 'fixed', bottom: 0, width: '420px', backgroundColor: '#D9D9D9' }}
                >
                    <Link to={"/profile"}>
                        <BottomNavigationAction label="Perfil" value="profile" icon={<Person />} />
                    </Link>
                    <Link to={"/insert-products"}>
                        <BottomNavigationAction label="Adicionar" value="add" icon={<Add />} />
                    </Link>
                    <Link to={"/update-price"}>
                        <BottomNavigationAction label="Editar" value="edit" icon={<Edit />} />
                    </Link>
                </BottomNavigation>
            </Box>

        </Container>
    );
}

export default Home;
