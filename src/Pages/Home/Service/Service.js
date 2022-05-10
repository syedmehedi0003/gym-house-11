import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, img, amount, quantity, supplier, description } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = id => {

        navigate(`/service/ ${id}. ${name}`)


    }

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
                <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-secondary btn-text'> Order Now</button>

            </div>
        </div>
    );
};

export default Service;

