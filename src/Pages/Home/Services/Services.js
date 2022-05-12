import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useServices();

    // useEffect(() => {
    //     fetch('http://localhost:5000/service')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])



    return (
        <div className='container '>
            <h2 className='services-text '>Our Services</h2>

            <div className='services-container pb-4'>

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        services={services}
                        setServices={setServices}
                    ></Service>)
                }


            </div>

        </div>
    );
};

export default Services;