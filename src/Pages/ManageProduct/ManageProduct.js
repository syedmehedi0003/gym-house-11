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


    //update
    // const handleUpdate = event => {
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     const description = event.target.description.value;
    //     const amount = event.target.amount.value;
    //     const quantity = event.target.quantity.value;
    //     const supplier = event.target.supplier.value;
    //     const img = event.target.img.value;

    //     const data = { name, description, amount, quantity, supplier, img };


    //     const url = `http://localhost:5000/service/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             alert('Update Successfully');
    //             event.target.reset();
    //         })
    // }

    return (
        <div className='w-50 mx-auto text-center'>
            <h2>Manage Product</h2>
            <div>
                {
                    services.map(product => <div key={product._id}>
                        <h5>{product.name}
                            <Link to={`/updateproduct/${product._id}`}><button>Update</button> </Link>
                            <button onClick={() => handleDelete(product._id)}>Delivered</button></h5>

                    </div>)
                }
            </div>

        </div >
    );
};

export default ManageProduct;