import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './Service.css';

const Service = ({ service, services, setServices }) => {

    const { _id, name, img, amount, quantity, supplier, description } = service;


    // const [services, setServices] = useServices();
    // const navigate = useNavigate();
    // // const navigateToServiceDetail = id => {

    // //     navigate(`/service/ ${id}. ${name}`)


    // // }
    const id = _id;

    const handleDelivered = () => {
        const url = `http://localhost:5000/deliver/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            // body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)


            })
        setServices(services.map(service => service._id === id ? { ...service, quantity: service.quantity - 1 } : service));


    };

    return (
        <div className='service p-1 mb-3'>
            <img className='w-50 img-fluid' src={img} alt="" />
            <div className='service-text'>
                <h2 className='py-2'>{name}</h2>
                <p><b>Price:</b> {amount}</p>
                <p><b>Quantity: </b>{quantity}</p>
                <p><b>Brand:</b>  {supplier}</p>
                <p><small className='p-1 my-2'>{description}</small> </p>
                <Link to={`/updateproduct/${_id}`}><button className='btn btn-primary' >Update </button> </Link>
                <button className='btn btn-dark' onClick={() => handleDelivered()}>Delivered </button>



            </div>
        </div>
    );
};

export default Service;

