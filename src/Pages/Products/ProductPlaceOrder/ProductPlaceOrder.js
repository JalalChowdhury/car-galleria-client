import React, { useEffect, useState } from 'react';
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import { Box } from '@mui/system';

import './ProductPlaceOrder.css';
import OrderPlaceModal from '../OrderPlaceModal/OrderPlaceModal';

const ProductPlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    // for modal update 
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    useEffect(() => {

        const url = `http://localhost:5000/products/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])
    return (
        <Box >


            <Card sx={{ maxWidth: "100%", maxheight: '70%', border: 0, boxShadow: 0 }}>

                <CardMedia
                    component="img"
                    imgage-design

                    style={{ width: '100%', height: '600px' }}
                    image={product.img}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        {product.description}
                    </Typography>
                </CardContent>
               
                <Button   onClick={handleBookingOpen} variant="contained" sx={{ ml: 7, my: 2, width: 200 }}>
                    Order Place
                </Button>

            </Card>

            <OrderPlaceModal
                product={product}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                // setBookingSuccess={setBookingSuccess}

            >
            </OrderPlaceModal>


        </Box>
    );
};

export default ProductPlaceOrder;