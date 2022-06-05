import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DeliveredItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://salty-cliffs-03566.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [id])


    const handleDelivered = e => {

        // const quantity = item?.quantity
        // const updateItem = { quantity }
        const url = `https://salty-cliffs-03566.herokuapp.com/deliver/${id}`;
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


    };



    return (
        <div>

            <h2>Item Name: {item.name}</h2>
            <h4>Quantity: {item.quantity}</h4>

            <button onClick={() => handleDelivered(item._id)}>Delivered</button>
        </div>
    );
};

export default DeliveredItem;