import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DeliveredItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://salty-cliffs-03566.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [id])


    const handleDelivered = e => {

        // const quantity = item?.quantity
        // const updateItem = { quantity }
        const url = `http://salty-cliffs-03566.herokuapp.com/deliver/${id}`;
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





    // const handleDelivered = event => {
    //     // event.preventDefault();

    //     // const quantity = event.target.quantity.value;

    //     // const updated = { quantity }
    //     // const quantity = item?.quantity;
    //     // const deliveredItem = { quantity };

    //     //new data
    //     // event.preventDefault();

    //     // const quantity = event.target.quantity.value;

    //     // const updated = { quantity }

    //     const quantity = parseInt(quantity) - 1;

    //     const deliveredItem = { quantity };
    //     console.log(deliveredItem);

    //     setItem({ ...item, quantity: item.quantity = item.quantity + parseInt(quantity) });



    //     //send data
    //     const url = `http://salty-cliffs-03566.herokuapp.com/service/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(deliveredItem)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             alert('Update Successfully');
    //             event.target.reset();

    //         })
    // }

    return (
        <div>

            <h2>Item Name: {item.name}</h2>
            <h4>Quantity: {item.quantity}</h4>

            <button onClick={() => handleDelivered(item._id)}>Delivered</button>
        </div>
    );
};

export default DeliveredItem;