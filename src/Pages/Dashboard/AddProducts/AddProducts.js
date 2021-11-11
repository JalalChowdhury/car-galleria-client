import React, { useRef } from 'react';

// import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

const AddProducts = () => {



    const imgRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const modelYearRef = useRef();
    const descriptionRef = useRef();

    const handleBookingSubmit = e => {

        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;
        const modelYear = modelYearRef.current.value;
        const description = descriptionRef.current.value;

        const newUser = { name, img, price, modelYear, description };
        console.log("add product n ame", name);
        console.log("add product des ame", description);

        // send to the server
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    alert("Successfully added the Product");
                    e.target.reset();

                }
            });
        e.preventDefault();
    }

    return (
        <div>
            <Box style={{ textAlign: 'center' }}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    Add Products
                </Typography>
                <form onSubmit={handleBookingSubmit}>
                    <TextField

                        sx={{ width: '60%', m: 1 }}
                        id="demo-helper-text-misaligned-no-helper"
                        label="Img-URL"
                        inputRef={imgRef}
                        size="small"
                    />
                    <TextField

                        sx={{ width: '60%', m: 1 }}
                        id="demo-helper-text-misaligned-no-helper"
                        label="Car Name"
                        inputRef={nameRef}
                        size="small"
                    />
                    <TextField

                        sx={{ width: '60%', m: 1 }}
                        id="demo-helper-text-misaligned-no-helper"
                        label="Price"
                        inputRef={priceRef}
                        size="small"
                    />
                    <TextField

                        sx={{ width: '60%', m: 1 }}
                        id="demo-helper-text-misaligned-no-helper"
                        label="Model-Year"
                        inputRef={modelYearRef}
                        size="small"
                    />
                    <TextField

                        sx={{ width: '60%', m: 1 }}
                        id="demo-helper-text-misaligned-no-helper"
                        label="Description"
                        inputRef={descriptionRef}
                        size="small"
                    />
                    <br />

                    <Button type="Submit" variant="contained">Submit</Button>

                </form>
            </Box>

        </div>
    );
};

export default AddProducts;