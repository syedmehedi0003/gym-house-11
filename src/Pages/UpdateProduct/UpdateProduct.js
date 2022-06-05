// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




const UpdateProduct = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://salty-cliffs-03566.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [id])



    const handleUpdate = event => {

        event.preventDefault();

        const quantity = event.target.quantity.value;

        // const updated = { quantity }

        const newQuantity = parseInt(quantity) + parseInt(item.quantity);
        console.log(newQuantity);
        const updateItem = { newQuantity };
        if (!quantity) {
            alert('Quantity added');
        }

        setItem({ ...item, quantity: item.quantity = parseInt(item.quantity) + parseInt(quantity) });

        //send data

        const url = `https://salty-cliffs-03566.herokuapp.com/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Update Successfully');
                event.target.reset();

            })


    }



    return (
        <div className='w-50 mx-auto'>

            <h2>Item Name: {item.name}</h2>
            <h4>Quantity: {item.quantity}</h4>

            <form className='d-flex flex-column' onSubmit={handleUpdate}>

                <input type="text" className='mb-2' placeholder='Quantity' name="quantity" />
                <input className='mb-2 btn btn-primary' type="submit" value="Update Item" />
            </form>


        </div>
    );
};

export default UpdateProduct;


