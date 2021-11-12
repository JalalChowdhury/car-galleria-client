import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../../hook/useAuth';

const ManageProducts = () => {
    const { user } = useAuth();

    const [manageProducts, setManageProducts] = useState([]);

    let index = 1;

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [])

    //for cancel products using fetch api
    const handleProductCancel = id => {
        fetch(`http://localhost:5000/cancelProduct/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    const newOrders = manageProducts.filter(order => order._id !== id);
                    setManageProducts(newOrders)
                }
            })
            alert("Are You Sure delete this Product?")
    }

    return (
        <div>
            <h1> Manage Products </h1>
            <div className="table-div">
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageProducts?.map(product =>
                                <tr>
                                    <td>{index++}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.modelYear}</td>
                                    <td>{product.status}</td>
                                    <td><Button onClick={() => handleProductCancel(product._id)} variant='danger'>Delete Product</Button></td>

                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageProducts;