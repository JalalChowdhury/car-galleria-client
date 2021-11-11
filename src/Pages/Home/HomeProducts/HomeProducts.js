import React,{useEffect,useState} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ProductCard from '../../Shared/ProductCard/ProductCard';



const HomeProducts = () => {

    // all services 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    // const historyServices = useHistory();
    // const handleClickPackages = () => {
    //     historyServices.push('/packages');
    // }

    // get fisrt 6 items in services 
    const topProducts = products.slice(0, 6);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600,m:2,color: 'info.main' ,textAlign:'center' }} variant="h6" component="div">
                    Top Products
                </Typography>
               
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        topProducts.map((product) =>
                            <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeProducts;