import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, IconButton } from '@mui/material';
import { Room } from '@mui/icons-material';

function ProductCard({ imageUrl, description, price, location, marketName, distance }) {
    return (
        <Card display="flex">
            <CardMedia
                component="img"
                alt="Produto"
                height="66"
                style={{ width: '78px',backgroundSize: 'cover' }}
                image={imageUrl} // URL da imagem do produto
            />
            <CardContent>
                <Box display="flex" alignItems="center" marginTop="10px">

                    <Typography variant="h6" gutterBottom>
                        {description}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {price}
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginTop="10px">
                    <IconButton color="primary" aria-label="localização" component="span" size="small">
                        <Room />
                    </IconButton>
                    <Typography variant="body2" color="textSecondary">
                        {marketName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" marginLeft="5px">
                        {distance} km
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ProductCard;
