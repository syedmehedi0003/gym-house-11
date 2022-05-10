// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const UpdateProduct = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [])



    const handleUpdate = event => {
        event.preventDefault();


        const quantity = event.target.quantity.value;

        // const updated = { quantity }

        const newQuantity = parseInt(quantity) + parseInt(quantity);
        console.log(newQuantity);
        const updated = { newQuantity };
        // console.log(updated);



        //send data
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updated)
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
                <input className='mb-2' type="submit" value="Update Item" />
            </form>


        </div>
    );
};

export default UpdateProduct;


