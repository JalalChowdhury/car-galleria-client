import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const ProductCard = (props) => {


    const { _id, name, description, img } = props.product;
    const productDetailURL = `/product/${_id}`;


    return (
        <Grid item  sm={12} md={4}>

            <Card sx={{ maxWidth: 345, border: 1, boxShadow: 0 }}>

                <CardMedia
                    component="img"


                    style={{ width: '100%', height: '200px', margin: "0 auto" }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        {description.split(' ').splice(0, 17).join(' ')} ...
                    </Typography>
                </CardContent>
                <Button variant="contained" href={productDetailURL} sx={{ ml: 7,my:2, width: 200  }}>
                    Explore
                </Button>

            </Card>

        </Grid>
    );
};

export default ProductCard;