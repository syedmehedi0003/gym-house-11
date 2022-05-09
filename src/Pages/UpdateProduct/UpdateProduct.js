import React, { useEffect, useState } from 'react';
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
        const name = event.target.name.value;
        const description = event.target.description.value;
        const amount = event.target.amount.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const img = event.target.img.value;

        const data = { name, description, amount, quantity, supplier, img };


        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Update Successfully');
                event.target.reset();
            })
    }


    return (
        <div>
            <h2>Update Item: {item.name}</h2>
            <form className='d-flex flex-column' onSubmit={handleUpdate}>

                <input type="text" className='mb-2' placeholder='Name' name="name" />
                <textarea className='mb-2' placeholder='Description' name="description" />
                <input type="text" className='mb-2' placeholder='Price' name="amount" />
                <input type="text" className='mb-2' placeholder='Quantity' name="quantity" />
                <input type="text" className='mb-2' placeholder='Brand' name="supplier" />
                <input type="text" className='mb-2' placeholder='Photo URL' name="img" />

                <input className='mb-2' type="submit" value="Update Item" />
            </form>
        </div>
    );
};

export default UpdateProduct;