import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../hooks/useServices';
import './ManageProduct.css';

const ManageProduct = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are u sure?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
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
                            <Link to={`/updateproduct/${product._id}`}><button className='btn btn-secondary btn-text'>Update</button> </Link>
                            {/* <Link to={`/addproduct`}><button className='btn btn-secondary btn-text'>Add Item</button> </Link> */}
                            <button className='btn btn-danger btn-text' onClick={() => handleDelete(product._id)}>Delete</button></h6>

                    </div>)
                }
            </div>

        </div >
    );
};

export default ManageProduct;