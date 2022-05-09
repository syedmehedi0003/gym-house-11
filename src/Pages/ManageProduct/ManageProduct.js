import React from 'react';
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
            <h2>Manage Product</h2>
            <div>
                {
                    services.map(product => <div key={product._id}>
                        <h5>{product.name}<button onClick={() => handleDelete(product._id)}>Delivered</button></h5>

                    </div>)
                }
            </div>

        </div >
    );
};

export default ManageProduct;