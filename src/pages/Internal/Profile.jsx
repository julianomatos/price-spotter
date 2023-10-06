import React, { useState } from 'react';
import { Container, Typography, IconButton, Button, TextField, Box, Avatar } from '@mui/material';
import { ArrowBack, PhotoCamera } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Profile() {
  // Estados para o nome, data de nascimento e foto do perfil
  const [name, setName] = useState('Seu Nome');
  const [birthdate, setBirthdate] = useState('01/01/1990');
  const [profileImage, setProfileImage] = useState(null);

  // Função para carregar/atualizar a imagem do perfil
  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      setProfileImage(imageUrl);
    }
  };

  // const history = useHistory();

  // const handleVoltar = () => {
  //   history.goBack();
  // };

  return (
    <Container maxWidth="sm">
      <Link to={'/'}>
        <IconButton color="primary" aria-label="voltar">
          <ArrowBack />
        </IconButton>
      </Link>
      <Typography variant="h4" align="center">
        PriceSpotter
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginTop="20px">
        <Avatar
          alt="Foto de Perfil"
          src={profileImage}
          sx={{ width: 120, height: 120 }}
        />
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="profile-image-upload"
          onChange={handleImageUpload}
        />
        <label htmlFor="profile-image-upload">
          <IconButton
            color="primary"
            aria-label="carregar/atualizar imagem"
            component="span"
            style={{ marginTop: '10px' }}
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        label="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ marginTop: '20px' }}
      />
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        label="Data de Nascimento"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        sx={{ marginTop: '10px' }}
      />
      <Button variant="contained" color="primary" fullWidth sx={{ marginTop: '20px' }}>
        ATUALIZAR
      </Button>
    </Container>
  );
}

export default Profile;
