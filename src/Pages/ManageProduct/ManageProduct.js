import React from 'react';

import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useServices from '../hooks/useServices';
import './ManageProduct.css';

const ManageProduct = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are u sure?');
        if (proceed) {
            const url = `https://salty-cliffs-03566.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(product => product._id !== id);
                    setServices(remaining);
                })

        }
    }


    return (
        <div className='w-50 mx-auto text-center'>
            <h4 className='mb-2'>Manage Product</h4>

            <div>
                {
                    services.map(product => <div key={product._id}>
                        <h6>{product.name},Quantity:{product.quantity} <br />
                            <Link className='btn btn-secondary btn-text mx-2 ' to={`/updateproduct/${product._id}`}>Update</Link>

                            <button className='btn btn-danger btn-text' onClick={() => handleDelete(product._id)}>Delete</button></h6>

                    </div>)
                }
            </div>
            <ToastContainer />
        </div >
    );
};

export default ManageProduct;