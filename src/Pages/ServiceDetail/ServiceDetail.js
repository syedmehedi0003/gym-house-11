import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    return (
        <div className='text-center mt-3'>
            <h2>Your Booking: {serviceId}</h2>

            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>


        </div>
    );
};

export default ServiceDetail;