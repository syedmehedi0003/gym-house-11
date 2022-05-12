import React from 'react';
import useServices from '../hooks/useServices';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';

const MyItems = () => {
    const [user] = useAuthState(auth);
    if (user) {
        // console.log(user);
    }
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

        };

        const myItem = {
            name: user.displayName,
            email: user.email,
        }

        axios.post('http://localhost:3000/service', myItem)
            .then(response => {
                console.log(response);
            })
    }


    return (
        <div className='w-50 mx-auto text-center'>
            <h2>My Items</h2>
            <h4>Name: {user.displayName}, Email: {user.email || 'GoogleSignIn'}</h4>
            <div>
                {
                    services.map(product => <div key={product._id}>
                        <h5>{product.name},Quantity:{product.quantity}
                            <button className='btn btn-danger btn-text' onClick={() => handleDelete(product._id)}>Delete</button></h5>

                    </div>)
                }
            </div>

        </div >
    );
};

export default MyItems;