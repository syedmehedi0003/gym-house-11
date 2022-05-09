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

    // const onSubmit = data => {
    //     console.log(data);
    //     const url = `http://localhost:5000/service`;

    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })

    // };



    return (
        <div>
            <h2>Update Item: {item.name}</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit}>

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